import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'; 

const useBarData = () => {
    const [tickets, setTickets] = useState([])
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

    // get the last 5 months 
    const today = new Date(); // Get the current date

    const monthsAgo0 = new Date(today.getFullYear(), today.getMonth() - 4, 1)
    const monthsAgo1 = new Date(today.getFullYear(), today.getMonth() - 3, 1)
    const monthsAgo2 = new Date(today.getFullYear(), today.getMonth() - 2, 1)
    const monthsAgo3 = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const monthsAgo4 = new Date(today.getFullYear(), today.getMonth(), 1)

    const year0 = monthsAgo0.getFullYear()
    const year1 = monthsAgo1.getFullYear()
    const year2 = monthsAgo2.getFullYear()
    const year3 = monthsAgo3.getFullYear()
    const year4 = monthsAgo4.getFullYear()

    const month0 = String(monthsAgo0.getMonth() + 1).padStart(2, '0'); 
    const month1 = String(monthsAgo1.getMonth() + 1).padStart(2, '0'); 
    const month2 = String(monthsAgo2.getMonth() + 1).padStart(2, '0'); 
    const month3 = String(monthsAgo3.getMonth() + 1).padStart(2, '0'); 
    const month4 = String(monthsAgo4.getMonth() + 1).padStart(2, '0'); 

    const value0 = `${year0}-${month0}`; 
    const value1 = `${year1}-${month1}`; 
    const value2 = `${year2}-${month2}`; 
    const value3 = `${year3}-${month3}`; 
    const value4 = `${year4}-${month4}`; 

    const fiveMonths = [value0, value1, value2, value3, value4]

    // count tickets opened per month
    let ticketMonth1 = 0
    let ticketMonth2 = 0
    let ticketMonth3 = 0
    let ticketMonth4 = 0
    let ticketMonth5 = 0

    tickets.map((ticket, i) => {
        const ticketDate = ticket.dateCreated.substring(0,7)

        if (ticketDate === fiveMonths[0]) {
            ticketMonth1++
        } else if (ticketDate === fiveMonths[1]) {
            ticketMonth2++
        } else if (ticketDate === fiveMonths[2]) {
            ticketMonth3++
        } else if (ticketDate === fiveMonths[3]) {
            ticketMonth4++
        } else if (ticketDate === fiveMonths[4]) {
            ticketMonth5++
        }
        return null
    })
    console.log(tickets)

    const ticketCountByDateCreated = [ticketMonth1, ticketMonth2, ticketMonth3, ticketMonth4, ticketMonth5]

    // create and return sorted data
    const barArray = []
    fiveMonths.forEach((month, i) => {
        barArray.push({
            date: month,
            count: ticketCountByDateCreated[i]
        })
    })

    return barArray
}

export default useBarData