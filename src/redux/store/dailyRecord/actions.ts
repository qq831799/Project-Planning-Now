// import {
//     IDailyRecordDetail, ADD_DAILY_RECORD_DETAIL, EDIT_DAILY_RECORD_DETAIL, DELETE_DAILY_RECORD_DETAIL, DailyRecordActionTypes, IDailyRecord, SET_DAILY_RECORD, IDeleteRecordPayload
// } from './types'
import { IDailyRecordDetail, IDeleteRecordPayload } from './types';
import { createAction } from '@reduxjs/toolkit'


export const AddRecordDetail = createAction<IDailyRecordDetail>('ADD_DAILY_RECORD_DETAIL');
export const DeleteRecordDetail = createAction<IDeleteRecordPayload>('DELETE_DAILY_RECORD_DETAIL');
export const EditRecordDetail = createAction<IDailyRecordDetail>('EDIT_DAILY_RECORD_DETAIL'); 

 
// export function AddRecordDetail(newRecord: IDailyRecordDetail): DailyRecordActionTypes {
//     console.log(newRecord);
//     return {
//         type: ADD_DAILY_RECORD_DETAIL,
//         payload: newRecord
//     }
// }
// export function DeleteRecordDetail(recordUUID: string, recordDetailUUID: string): DailyRecordActionTypes {
//     return {
//         type: DELETE_DAILY_RECORD_DETAIL,
//         payload: {
//             recordUUID,
//             recordDetailUUID
//         }
//     }
// }
// export function EditRecordDetail(editRecord: IDailyRecordDetail): DailyRecordActionTypes {
//     return {
//         type: EDIT_DAILY_RECORD_DETAIL,
//         payload: editRecord
//     }
// }
// export function SetDailyRecords(dailyRecords: IDailyRecord[]): DailyRecordActionTypes {
//     return {
//         type: SET_DAILY_RECORD,
//         payload: dailyRecords
//     }
// }