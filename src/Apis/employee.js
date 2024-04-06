import request from './request';
import { BaseURL } from '../api/DataApis';
    
// export const getUserList = async () => {

//     let res = await request({
//       url: 'webservices.php?action=getstudents',
//       // url: 'posts',
//       method:"GET"
//     });

//     if (res && res.data ) {
//       const data = res.data.student;
//       console.log("data",data);
//       return data;
//     }
//     return [];
// }


export const getUserList = async (class_id ) => {
  const apiEndpoint = `${BaseURL}/student/getStudents`;

    let res = await request({
      url: `${apiEndpoint}/${class_id}`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID":10
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
