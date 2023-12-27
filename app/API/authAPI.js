// export function loginUser(loginInfo) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const response = await fetch('/auth/login', {
//           method: 'POST',
//           body: JSON.stringify(loginInfo),
//           headers: { 'content-type': 'application/json' },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           resolve({ data });
//         } else {
//           const error = await response.text();
//           reject(error);
//         }
//       } catch (error) {
//         reject( error );
//       }
  
//     });
//   }
  export async function loginUser(loginInfo) {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
  
      if (response.ok) {
        const data = await response.json();
        return { data };
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      throw error;
    }
  }
  