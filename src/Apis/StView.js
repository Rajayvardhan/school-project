import request from './request';
import { BaseURL } from '../api/DataApis';
export const getStView = async ( class_id ) => {
    // console.log("class_id", class_id);
      
    //alert(class_id);
  
      let res = await request({
        url: `${BaseURL}/student/viewStudent/`+class_id ,
        // url: 'posts',
        method:"POST",
        data: JSON.stringify({
          "schoolyearID":10,
           
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
      });
  
      if (res && res.students) {
        //const data = res.data.student;
        // console.log("res",res.students)
        return res.students;
      }
      return [];
  }