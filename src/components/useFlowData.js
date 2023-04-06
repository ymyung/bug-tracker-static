import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext';

const useFlowData = () => {
    const [tickets, setTickets] = useState([])
    const typeArray = ['UI', 'Performance', 'Bug']
    const { user, dispatch } = useAuthContext()

    // get all tickets
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // const response = await fetch('https://localhost:4000/ticket', {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // });
                // const data = await response.json();
                const data = [
                    {
                        "_id": "6403b096c70703cc30910d2c",
                        "title": "Ticket 1",
                        "description": "Ticket 1 description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-11-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-11-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b0a4c70703cc30910d2f",
                        "title": "Ticket 2",
                        "description": "Ticket 2 description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-11-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-11-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b25dc70703cc30910d5a",
                        "title": "Ticket 3",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-11-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-12-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b266c70703cc30910d5d",
                        "title": "Ticket 4",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-11-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-12-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b269c70703cc30910d60",
                        "title": "Ticket 5",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-11-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-12-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b26cc70703cc30910d63",
                        "title": "Ticket 6",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-12-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b270c70703cc30910d66",
                        "title": "Ticket 7",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2022-12-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "low"
                    },
                    {
                        "_id": "6403b27dc70703cc30910d69",
                        "title": "Ticket 8",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2023-01-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "medium"
                    },
                    {
                        "_id": "6403b280c70703cc30910d6c",
                        "title": "Ticket 9",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2023-01-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "medium"
                    },
                    {
                        "_id": "6403b284c70703cc30910d6f",
                        "title": "Ticket 10",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2023-01-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "medium"
                    },
                    {
                        "_id": "6403b28dc70703cc30910d72",
                        "title": "Ticket 11",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2023-02-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "medium"
                    },
                    {
                        "_id": "6403b294c70703cc30910d75",
                        "title": "Ticket 12",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2023-01-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "medium"
                    },
                    {
                        "_id": "6403b297c70703cc30910d78",
                        "title": "Ticket 13",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-01-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "resolved",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "high"
                    },
                    {
                        "_id": "6403b29bc70703cc30910d7b",
                        "title": "Ticket 14",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-01-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "resolved",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "high"
                    },
                    {
                        "_id": "6403b29fc70703cc30910d7e",
                        "title": "Ticket 15",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-01-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "resolved",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "high"
                    },
                    {
                        "_id": "6403b2a2c70703cc30910d81",
                        "title": "Ticket 16",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-01-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "resolved",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "critical"
                    },
                    {
                        "_id": "6403b2a5c70703cc30910d84",
                        "title": "Ticket 17",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "Backend",
                        "status": "resolved",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0,
                        "priority": "critical"
                    },
                    {
                        "_id": "6404ec157ff41ee0ffaf2360",
                        "title": "Ticket 18",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "ui",
                        "priority": "critical",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec267ff41ee0ffaf236b",
                        "title": "Ticket 19",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "ui",
                        "priority": "high",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec2b7ff41ee0ffaf236e",
                        "title": "Ticket 20",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "ui",
                        "priority": "high",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec327ff41ee0ffaf2371",
                        "title": "Ticket 21",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec387ff41ee0ffaf2374",
                        "title": "Ticket 22",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec3b7ff41ee0ffaf2377",
                        "title": "Ticket 23",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2022-12-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec3d7ff41ee0ffaf237a",
                        "title": "Ticket 24",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-02-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec427ff41ee0ffaf237d",
                        "title": "Ticket 25",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec467ff41ee0ffaf2380",
                        "title": "Ticket 26",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec497ff41ee0ffaf2383",
                        "title": "Ticket 27",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "performance",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec4c7ff41ee0ffaf2386",
                        "title": "Ticket 28",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec4f7ff41ee0ffaf2389",
                        "title": "Ticket 29",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec537ff41ee0ffaf238c",
                        "title": "Ticket 30",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ec567ff41ee0ffaf238f",
                        "title": "Ticket 31",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "6404ecaa7ff41ee0ffaf23a6",
                        "title": "Ticket 32",
                        "description": "Ticket description",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "6407d27f92cba1af9533401e",
                            "username": "user2",
                            "email": "email2@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-27T07:00:00.000Z",
                        "dueDate": "2023-03-02T07:00:00.000Z",
                        "type": "bug",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": "2023-03-01T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "64119386c9845653a1ead1d7",
                        "title": "Test Ticket 1",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "640d8066220d79310b7ea2ea",
                            "username": "user5",
                            "email": "email5@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:44:16.298Z",
                        "dueDate": "2023-03-31T00:00:00.000Z",
                        "type": "ui",
                        "priority": "high",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "641193d7c9845653a1ead1ee",
                        "title": "Test Ticket 2",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "640d806b220d79310b7ea2ed",
                            "username": "user6",
                            "email": "email6@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:44:16.298Z",
                        "dueDate": "2023-03-31T00:00:00.000Z",
                        "type": "performance",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "641194a2c9845653a1ead215",
                        "title": "Test Ticket 3",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "640d8066220d79310b7ea2ea",
                            "username": "user5",
                            "email": "email5@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:48:05.621Z",
                        "dueDate": "2023-04-08T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119602c9845653a1ead269",
                        "title": "test 1",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-03-23T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "6411960ec9845653a1ead278",
                        "title": "test 2",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d9c9845653a1ead015",
                            "username": "user8",
                            "email": "email8@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-04-27T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119618c9845653a1ead287",
                        "title": "test 3",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-04-05T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119622c9845653a1ead296",
                        "title": "test 4",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d9c9845653a1ead015",
                            "username": "user8",
                            "email": "email8@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-03-31T00:00:00.000Z",
                        "type": "ui",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119637c9845653a1ead2a5",
                        "title": "test 6",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d9c9845653a1ead015",
                            "username": "user8",
                            "email": "email8@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-03-30T00:00:00.000Z",
                        "type": "ui",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119641c9845653a1ead2b4",
                        "title": "test 6",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-03-31T00:00:00.000Z",
                        "type": "ui",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "6411964dc9845653a1ead2c3",
                        "title": "test 7",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T09:55:02.209Z",
                        "dueDate": "2023-03-30T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119de4c9845653a1ead8fb",
                        "title": "test 8",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:27:35.368Z",
                        "dueDate": "2023-03-10T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119df1c9845653a1ead90a",
                        "title": "test 9",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:27:35.368Z",
                        "dueDate": "2023-03-10T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119dfdc9845653a1ead919",
                        "title": "test 10",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190d1c9845653a1ead012",
                            "username": "user7",
                            "email": "email7@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:27:35.368Z",
                        "dueDate": "2023-03-24T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119edac9845653a1ead991",
                        "title": "test 1",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190e6c9845653a1ead01b",
                            "username": "user10",
                            "email": "email10@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:32:46.523Z",
                        "dueDate": "2023-03-25T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119eeac9845653a1ead9a0",
                        "title": "test 2",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190e6c9845653a1ead01b",
                            "username": "user10",
                            "email": "email10@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:32:46.523Z",
                        "dueDate": "2023-03-21T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119ef7c9845653a1ead9af",
                        "title": "test 3",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "641190f0c9845653a1ead021",
                            "username": "user12",
                            "email": "email12@gmail.com",
                            "role": "dev"
                        },
                        "dateCreated": "2023-03-15T10:32:46.523Z",
                        "dueDate": "2023-03-23T00:00:00.000Z",
                        "type": "bug",
                        "priority": "medium",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    },
                    {
                        "_id": "64119f0ac9845653a1ead9dd",
                        "title": "test",
                        "description": "test",
                        "createdBy": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dev": {
                            "_id": "64066ee557c03d1ecffc51ed",
                            "username": "testuser",
                            "email": "testuser@gmail.com",
                            "role": "dev",
                            "image": null
                        },
                        "dateCreated": "2023-03-15T10:33:38.044Z",
                        "dueDate": "2023-03-24T00:00:00.000Z",
                        "type": "bug",
                        "priority": "low",
                        "status": "open",
                        "dateResolved": null,
                        "__v": 0
                    }
                ]

                setTickets(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (user) {
            fetchTickets();
        }
    }, [dispatch, user]);

    // filter for open tickets
    const openTickets = Array.isArray(tickets) ? tickets.filter(ticket => ticket.status === 'open') : []

    // sort tickets by type
    let ticketsUi = 0
    let ticketsPerformance = 0
    let ticketsBug = 0

    openTickets.map(ticket => {
        if (ticket.type === 'ui') {
            ticketsUi++
        } else if (ticket.type === 'performance') {
            ticketsPerformance++
        } else if (ticket.type === 'bug') {
            ticketsBug++
        }
        return null
    })

    const ticketCountByType = [ticketsUi, ticketsPerformance, ticketsBug]

    // create and return finished array
    const flowArray = []
    typeArray.forEach((type, i) => {
        flowArray.push({
            type: type,
            count: ticketCountByType[i]
        })
    })

    return flowArray
}

export default useFlowData