import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {_id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = _id =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        // console.log('confirm deleted');
        fetch(`http://localhost:5000/coffees/${_id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
              Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success'
            )
          }
        })
      }
    })
    
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl p-2">
      <figure>
        <img
          style={{ width: "150px", height: "170px" }}
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>
            <b>Supplier :</b>
            {supplier}
          </p>
          <p>
            <b>Taste :</b>
            {taste}
          </p>
          <p>
            <b>Chef :</b>
            {chef}
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn bg-slate-400">View</button>
            <button className="btn bg-info">Edit</button>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
