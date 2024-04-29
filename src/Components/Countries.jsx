import { useLoaderData } from "react-router-dom";


const Countries = () => {

    const countrydataData = [
        {
          image: "https://via.placeholder.com/300",
          title: "Lorem Ipsum",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Nulla facilisi",
          details: "Nulla facilisi. Nullam in magna. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam."
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Vestibulum ante ipsum",
          details: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue."
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Mauris lacinia lectus",
          details: "Mauris lacinia lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl."
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Phasellus faucibus molestie",
          details: "Phasellus faucibus molestie nisl. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
        }
      ];
      
    const handleload =()=>{


        fetch('http://localhost:5000/countries',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(countrydataData)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })

    }
      



    const country = useLoaderData();
    console.log(country);
    
    return (
        <div>
            <button onClick={handleload}>load</button>
        </div>
    );
};

export default Countries;