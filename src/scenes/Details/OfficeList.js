import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'reactstrap';
import { withRouter } from "react-router";

const CompanyList = (props) => {
    const [companyList, setOfficeList] = useState([]);
    useEffect(() => {
        console.log('dasdabhdhjk')
        props.getOfficeList(props.match.params.id)
    }, []);
    useEffect(() => {
        if (props.officeListdata && props.officeListdata.data) {
            console.log('OfficeListdata', props.officeListdata)
            setOfficeList(props.officeListdata.data);
        }
    }, [props.officeListdata])
    const changeHeadQuarterClick = (id) => {
        props.changeHeadquarter(props.match.params.id, id).then(() => {
            props.getOfficeList(props.match.params.id);
        })
    }
    if (props.isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>);
    }
    return (
        <div style={{ margin: 40, border: '1px solid black' }}>
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Company Name</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Street</th>
                        <th>Monthly Rent</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companyList.map((company, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{company.company} {company.headquater && <span>(Headquarter)</span>}</td>
                                    <td>{company.city}</td>
                                    <td>{company.postal_code}</td>
                                    <td>{company.street}</td>
                                    <td>{company.monthly_rent}</td>
                                    <td>{!company.headquater && <button onClick={() => changeHeadQuarterClick(company.id)}><span>Set Headquarter</span></button>}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default withRouter(CompanyList);