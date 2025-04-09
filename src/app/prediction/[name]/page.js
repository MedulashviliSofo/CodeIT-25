"use client";
import { useEffect, useState, use } from "react";
import styles from "./page.module.css";

const page = ({ params }) => {
  const { name } = use(params);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);

  useEffect(() => {
    fetch(`https://api.agify.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setAge(result));


      fetch(`https://api.nationalize.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setNationality(result));  


      fetch(`https://api.genderize.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setGender(result));
  }, [name]);

//  // ცხრილი
//   return (
//     <div>
//       <h2 style={{ textAlign: "center", margin: "40px auto" }}>მომხმარებლის მონაცემები</h2>
//       <table border="2" style={{ width: "60%", margin: "60px auto", textAlign: "center"}}>
//         <thead>
//             <th>სახელი</th>
//             <th>რაოდენობა</th>
//             <th>საშუალო ასაკი</th>
//             <th>სქესი</th>
//             <th>ქვეყანა</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{age?.name || "..."}</td>
//             <td>{age?.count || "..."}</td>
//             <td>{age?.age || "..."}</td>
//             <td>{gender?.gender || "..."}</td>
//             <td>{nationality?.nationality || "..."}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );



console.log(age);
  return (
    <div>
      <p>
        სახელი: {age?.name}, რაოდენობა {age?.count}, საშუალო ასაკი: {age?.age}
      </p>
      <p>
      სქესი: {gender?.gender}
      </p>
      <p>წარმომავლობა: {nationality?.country?.[0]?.country_id}</p>
    </div>
  );
};

export default page;