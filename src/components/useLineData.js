import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'; 

const useLineData = () => {
    const [tickets, setTickets] = useState([]);
    const lineId = [1, 2, 3, 4, 5]
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
    const getMonthString = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return `${year}-${month.toString().padStart(2, '0')}`;
    };
        
    const getFiveMonths = () => {
        const today = new Date();
        const currentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const fiveMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 4, 1);
        
        const months = [];
        
        while (fiveMonthsAgo <= currentMonth) {
            months.push(getMonthString(fiveMonthsAgo));
            fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() + 1);
        }
        
        return months;
    };
    
    const fiveMonths = getFiveMonths();

    // get ticket count for each month
    const ticketResolved = Array.isArray(tickets) ? tickets.filter(ticket => ticket.status === 'resolved') : [];

    const ticketCountByMonth = ticketResolved.reduce((acc, ticket) => {
        const date = new Date(ticket.dateResolved);
        const monthString = getMonthString(date);
        if (acc[monthString]) {
            acc[monthString]++;
        } else {
            acc[monthString] = 1;
        }
        return acc;
    }, {});

    const ticketCountArray = fiveMonths.map(month => {
        return {
            month,
            count: ticketCountByMonth[month] || 0
        }
    });

    const LineArray = [];
    lineId.forEach((id, i) => {
        LineArray.push({
            id,
            date: fiveMonths[i],
            count: ticketCountArray[i].count
        });
    });

    return LineArray;
};

export default useLineData