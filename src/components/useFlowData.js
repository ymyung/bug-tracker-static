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
                const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/ticket', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                });
                const data = await response.json();

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