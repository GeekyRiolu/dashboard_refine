import CustomAvatar from '@/components/custom-avatar';
import SelectOptionWithAvatar from '@/components/select-option-with-avatar';
import { companySizeOptions, industryOptions } from '@/constants';
import { UPDATE_COMPANY_MUTATION } from '@/graphql/mutations';
import { USERS_SELECT_QUERY } from '@/graphql/queries';
import { UsersSelectQuery } from '@/graphql/types';
import { getNameInitials } from '@/utilities';
import { Edit, useForm, useSelect } from '@refinedev/antd'
import { GetFieldsFromList } from '@refinedev/nestjs-query';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd'
import { CompanyContactsTable } from './contacts-table';

const EditPage = () => {
    const { saveButtonProps, formProps, formLoading, queryResult } = useForm({
        redirect: false,
        meta: {
            gqlMutation: UPDATE_COMPANY_MUTATION
        }
    });

    const { avatarUrl, name } = queryResult?.data?.data || {}

    const { selectProps, queryResult: queryResultUsers }= useSelect<GetFieldsFromList<UsersSelectQuery>>({
        resource:'users',
        optionLabel: 'name',
        pagination:{
            mode: 'off'
        },
        meta:{
          gqlQuery: USERS_SELECT_QUERY
        }
    
    })

  return (
    <div>
        <Row gutter={[32,32]}>
            <Col xs={24} xl={12}>
                <Edit 
                    isLoading={formLoading}
                    saveButtonProps={saveButtonProps}
                    breadcrumb={false}
                >
                    <Form {...formProps} layout='vertical' >
                        <CustomAvatar shape='square' src={avatarUrl} name={getNameInitials(name || '')} style={{width:96, height:96, marginBottom: '24px'}} />
                        <Form.Item label="Type of Hospital">
                            <Select options={companySizeOptions} />
                        </Form.Item>
                        <Form.Item label="Nursing Department">
                            <Select options={industryOptions} />
                        </Form.Item>
                        <Form.Item
                            label="Number of Nurses"
                            name="OwnerId"
                            initialValue={formProps?.initialValues?.salesOwner?.id}
                        >
                            <Select 
                                placeholder="Select number of nurses"
                                {...selectProps}
                                options={
                                    queryResultUsers.data?.data.map((user) =>({
                                    value: user.id,
                                    lable: (
                                        <SelectOptionWithAvatar 
                                        name= {user.name}
                                        avatarUrl= {user.avatarUrl ?? undefined}
                                        />
                                    )
                                    })) ?? []
                                }
                            />
                        </Form.Item>
                        
                        <Form.Item label="Number of Patients">
                            <InputNumber 
                                autoFocus
                                min={0}
                                placeholder="0"
                            />
                        </Form.Item>
                        <Form.Item label="Country" name="country">
                            <Input placeholder='Country'/>
                        </Form.Item>
                        <Form.Item label="State" name="State">
                            <Input placeholder='State'/>
                        </Form.Item>
                    </Form>
                </Edit>
            </Col>
            <Col xs={24} xl={12}>
                <CompanyContactsTable />
            </Col>
        </Row>
    </div>
  )
}

export default EditPage