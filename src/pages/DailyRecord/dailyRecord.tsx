import React, { useState } from 'react'
import DailyRecordDetail from './dailyRecordDetail';
import moment from 'moment';
import { Col } from 'antd';
import AddDailyRecordDetail from './addDailyRecordDetail'
import { IDailyRecord, IDailyRecordDetail } from '../../redux/store/dailyRecord/types';

interface IWorkingRecord {
    workingRecord: IDailyRecord
}
const DailyRecord = (props: IWorkingRecord) => {
    const record = props.workingRecord;
    const { recordItems } = props.workingRecord;

    return (
        <div className='border flex-1 m-1'>
            <div className='flex text-center border-b'>
                <div className=' flex-grow flex-shrink'>
                    {moment(record.date).format('MM/DD(ddd)')}
                </div>
                <div className='flex-shrink-0 flex-grow-0'>
                    <AddDailyRecordDetail recordUUID={props.workingRecord.recordUUID} ></AddDailyRecordDetail>
                </div>
            </div>

            {recordItems.map((item) => <DailyRecordDetail key={item.recordDetailUUID} recordItem={item} ></DailyRecordDetail>)}
        </div>
    );
}

export default DailyRecord;