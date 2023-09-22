import React, { useEffect, useState } from "react";
import style from "./Sortering.module.scss";
import Search from "./Search/Search";
import axios from "axios";
import { Link } from "react-router-dom";

const Sortering = () => {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState(""); // Define query state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:4000/section");
        setEvents(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const trimmedQuery = query.trim(); // Trim the search query

        if (trimmedQuery !== "") {
          const result = await axios.get(
            `http://localhost:4000/search/${trimmedQuery}`
          );
          console.log("this is result:", result);
          const eventData = result.data.data;
          console.log("this is data: ", result.data);
          setEvents(eventData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    handleSearch(); // Call handleSearch whenever query changes
  }, [query]);

  const handleSearchQuery = (searchQuery) => {
    setQuery(searchQuery); // Update the query state when the search query is received
  };

  return (
    <>
      <article>
        <div className={style.sort}>
          <h4>Din guide</h4>
          <h5>til en sund affaldssortering</h5>
          <Search onSearch={handleSearchQuery} /> {/* Pass onSearch callback */}
        </div>
        <div className={style.products}>
          {events.map((data) => {
            return (
              <Link to={`/AKDetaljer/${data.id}`} key={data.id}>
                <figure>
                  <img
                    className={style.sortimg}
                    src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                    alt={data.title}
                  />
                  <figcaption style={{ backgroundColor: `#${data.color}` }}>
                    {data.title}
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>
        <div>
          <img
            className={style.wave}
            src={require("../../../Assets/Images/Layout/PNG/bg-waves-1.png")}
            alt="waves"
          />
        </div>
      </article>
    </>
  );
};

export default Sortering;

// import React, { useEffect, useState } from "react";
// import style from "./Sortering.module.scss";
// import Search from "./Search/Search";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Sortering = () => {
//   const [events, setEvents] = useState([]);
//   const [query, setQuery] = useState(""); // Define query state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get("http://localhost:4000/section");
//         setEvents(result.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = async (searchQuery) => {
//     try {
//       const trimmedQuery = searchQuery.trim(); // Trim the search query
//       setQuery(trimmedQuery); // Update the query state

//       if (trimmedQuery !== "") {
//         const result = await axios.get(
//           `http://localhost:4000/search/${trimmedQuery}`
//         );
//         console.log("this is result:", result);
//         const eventData = result.data.data;
//         console.log("this is data: ", result.data);
//         setEvents(eventData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <article>
//         <div className={style.sort}>
//           <h4>Din guide</h4>
//           <h5>til en sund affaldssortering</h5>
//           <Search onSearch={handleSearch} /> {/* Pass onSearch callback */}
//         </div>
//         <div className={style.products}>
//           {events.map((data) => {
//             return (
//               <Link to={`/AKDetaljer/${data.id}`} key={data.id}>
//                 <figure>
//                   <img
//                     className={style.sortimg}
//                     src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
//                     alt={data.title}
//                   />
//                   <figcaption style={{ backgroundColor: `#${data.color}` }}>
//                     {data.title}
//                   </figcaption>
//                 </figure>
//               </Link>
//             );
//           })}
//         </div>
//         <div>
//           <img
//             className={style.wave}
//             src={require("../../../Assets/Images/Layout/PNG/bg-waves-1.png")}
//             alt="waves"
//           />
//         </div>
//       </article>
//     </>
//   );
// };

// export default Sortering;




// import React, { useEffect, useState } from "react";
// import style from "./Sortering.module.scss";
// import Search from "./Search/Search";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Sortering = () => {
//   // State to store the list of events
//   const [events, setEvents] = useState([]);

//   // Fetch data from the API when the component mounts
//   useEffect(() => {
//     // API URL with query parameters/
//     const url = `http://localhost:4000/section`;
//     // Function to make the API request
//     const getData = async () => {
//       try {
//         const result = await axios.get(url);
//         console.log(result);
//         // Set the retrieved data in the state
//         setEvents(result.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     // Call the function to fetch data
//     getData();
//   }, [setEvents]);

//   return (
//     <>
//       <article>
//         <div className={style.sort}>
//           <h4>Din guide</h4>
//           <h5>til en sund affaldssortering</h5>
//           <Search />
//         </div>
//         <div className={style.products}>
//           {events &&
//             events.map((data) => {
//               console.log(data);
//               return (
//                 <Link to={`/AKDetaljer/${data.id}`}>
//                   <figure key={data.id}>
//                     <img
//                       className={style.sortimg}
//                       src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
//                       alt={data.title}
//                     />

//                     <figcaption style={{ backgroundColor: `#${data.color}` }}>
//                       {data.title}
//                     </figcaption>
//                   </figure>
//                 </Link>
//               );
//             })}
//         </div>
//         <div>
//           <img
//             className={style.wave}
//             src={require("../../../Assets/Images/Layout/PNG/bg-waves-1.png")}
//             alt="waves"
//           />
//         </div>
//       </article>
//     </>
//   );
// }; 

// export default Sortering;

