import { useEffect } from 'react';
import { useState } from 'react';
import data from '../data.json'
import { Button, Modal } from 'antd';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { useRef } from 'react';



const dataRoot = data;
const originData = [];

for (let i = 0; i < dataRoot.length; i++) {
    // console.log(dataRoot[i]);
    originData.push({
        key: dataRoot[i].id.toString(),
        Task: dataRoot[i].task.toString(),
        Status: dataRoot[i].status.toString(),
    });
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

// LocalStorage
let stringLocal = window.localStorage.getItem("data");
let init = [...originData]
if (!stringLocal) {
    window.localStorage.setItem('data', JSON.stringify(init));
    init = [...originData];
} else {
    init = JSON.parse(stringLocal)
}

function FormListToDo() {
    const ref = useRef();
    const refSelect = useRef();
    const [count, setCount] = useState(1000);

    //Table
    const [form] = Form.useForm();
    const [data, setData] = useState(init);
    const [editingKey, setEditingKey] = useState('');

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //   Table
    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        console.log(91, record);
        form.setFieldsValue({
            Task: '',
            Status: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                window.localStorage.setItem('data', JSON.stringify(newData))
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                console.log(119, newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Task',
            dataIndex: 'Task',
            width: '40%',
            editable: true,
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            width: '25%',
            editable: true,
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <>
                        <Typography.Link style={{ margin: '0 20px' }} disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Edit
                        </Typography.Link>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => { deleteData(record.key) }}>
                            Delete
                        </Typography.Link>
                    </>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });




    const addData = () => {
        let task = ref.current.value;
        let select = refSelect.current.value;
        const newData = [...data];
        console.log(newData, 19);
        if (!task || !select) {
            alert('You must fill information in to input !')
        } else {
            newData.push({ key: newData[newData.length - 1].key * 1 + 1, Task: task, Status: select });
            setData(newData);
            setEditingKey('');
            setIsModalOpen(false);
            ref.current.value = '';
            window.localStorage.setItem('data', JSON.stringify(newData))
        }
    }


    const deleteData = async (key) => {
        try {
            if (window.confirm('Are you sure to delete?')) {
                const row = await form.validateFields();
                const newData = [...data];
                const index = newData.findIndex((item) => key === item.key);
                if (index > -1) {
                    newData.splice(index, 1);
                    window.localStorage.setItem('data', JSON.stringify(newData))
                    setData(newData);
                    setEditingKey('');
                } else {
                    newData.push(row);
                    setData(newData);
                    setEditingKey('');
                }
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };





    return (
        <div>

            <ul className='ul-task'>
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={data}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                        }}
                    />
                </Form>
            </ul>

            <div className="bottom create">
                <button onClick={showModal} id="add-new" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                    Add new item
                </button>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={addData} onCancel={handleCancel}>
                <input ref={ref} type="text" className='add-input' placeholder='Add Task'></input>
                <span>Status : </span><select ref={refSelect} name="" id="">
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </Modal>
        </div>

    )
}


export default FormListToDo