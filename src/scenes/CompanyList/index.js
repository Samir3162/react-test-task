import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';


const CompanyList = (props) => {
    const [companyList, setCompanyList] = useState([]);
    useEffect(() => {
        props.getCompanyList()
    }, [])
    useEffect(() => {
        if (JSON.stringify(props.companyListData) !== "{}") {
            console.log('companyListData', props.companyListData)
            setCompanyList(props.companyListData.data);
        }
    }, [props.companyListData])
    
    const rowClick = (value) => {
        props.history.push(`/id/${value}`)
    }
    
    return (
        <div style={{margin: 40}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Company List</h1>
        <Button style={{margin: 5}} onClick={() => props.history.push('/createcompany')}>CREATE COMPANY</Button>
        </div>
        <div style={{ border: '1px solid black'}}>
        <Table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Street</th>
                    <th>Monthly Rent</th>
                    <th>Monthly Rent Sum</th>
                </tr>
            </thead>
            <tbody>
                {
                    companyList.map((company, index) => {
                        return (
                            <tr onClick={() => rowClick(company.id)}>
                                <th scope="row">{index+ 1}</th>
                        <td>{company.company} {!company.headquater && <span>(Headquarter)</span>}</td>
                                <td>{company.city}</td>
                                <td>{company.postal_code}</td>
                                <td>{company.street}</td>
                                <td>{company.monthly_rent}</td>
                                <td>{company.monthly_rent_sum}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        </div>
        </div>
    );
}
export default CompanyList;