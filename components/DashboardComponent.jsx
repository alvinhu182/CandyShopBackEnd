import {useState, useEffect} from 'react';
import moment from 'moment';
import useSWR from 'swr';

const Dashboard = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selecttDate, setSelectDate] = useState('all');
    const{ data, error} = useSWR('http://localhost:3000/dashboard/testpi/user/123', fetcher);


    
useEffect(() =>{
    if(selecttDate !== 'custom')
    setStartDate('');
    setEndDate('');
},[selecttDate])

useEffect(() =>{
    let selected = moment(startDate, "YYYY-MM-DD").ToDate();
},[startDate])

useEffect(() =>{
    let selected = moment(startDate, "YYYY-MM-DD").ToDate();
    if(selected > moment().toDate()){
        setEndDate('')
        alert ('Data depois de hoje, selecione outra data anterior ao dia de hoje.')

    }
},[endDate])

    return <div className={'container-fluid'}>
        <div style={{
            display: 'block',
            textAlign: 'right',
            padding: '15px',
            boxSizing: 'border-box'
        }}>
            <input
            disabled={selecttDate !== 'custom'}
            value={start_date}
            type="date" 
            style={input}/>
             onChange={(event) => setStartDate(event.target.value)}
            <input
            disabled={selecttDate !== 'custom'}
            value={end_date}
             type="date"
              style={input}/>
               onChange={(event) => setEndDate(event.target.value)}
            <select 
            sttyle={input}
            onChange={(event) => setSelectDate(event.target.value)}
            >
                <option value="all">Tudo </option>
                <option value="7">7 dias </option>
                <option value="15">15 dias  </option>
                <option value="30">1 mês</option>
                <option value="180">6 meses </option>
                <option value="360">1 ano </option>
                <option value="custom">Custom </option>
              
                
            </select>
        </div>
    </div>
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    function request (endpoint) {
       
return {
    user: data,
    isLoading: !error && !data,
    isError: error
    }
    }
}

export default Dashboard;