// import React,{useState} from "react";

// function Body() {
    
//   return (
//     <div>
//     <div class="container">
//     <div class="form" id="edit-form">
    
//       <header class="header">Add your personal data</header>
//       <div class="form-section" onSubmit={handlesubmits}>
//         <label for="name">Name</label>
//         <input type="text" id="name" placeholder="Enter your name" name="myusername"  value={userInputs.name} required/>
//         <br />

//         <label for="email">Email</label>
//         <input type="text" id="email" placeholder="Enter your email" name="myemail" required onChange={controlInput} value={userInputs.email}/>
//         <br />

//         <label for="phone" id="phone1" name="phone" required>Phone</label>
//         <input
//         value={userInputs.phone}
//         onChange={controlInput}
//           id="phone"
//           type="tel"
//           placeholder="Enter your phone number"
          
//           name="myphone"
//         /><br />

//         <label for="personal5">Personal</label>
//         <input  class="personal" type="radio" name="personal" id="personal" value="Personal" />
//         <label for="professional">Professional</label>
//         <input
//         class="professional5"
//           type="radio"
//           name="personal"
//           id="professional"
//           value="Professional"
//         />
//         <br />

//         <div class="pic">
//           <div class="image-area active" id="preview" data-img="">
//             <img 
            
//               src=""
//               class=" rounded-start"
//               id="output"
//               alt="..."
//             />
//             <i class="fa-solid fa-cloud-arrow-up icon"></i>
//             <h3>Upload Image</h3>
//           </div>

//           <label for="file" class="custom-file-upload">Choose File</label>
//           <input type="file" id="file" name="upload_file" accept="image/*" />
//         </div>
//         <br />
//       </div>
//       <button class="btn-btn" id="button" >Add Contact Data</button>
//       <div class="social"><button id="connect-facebook" onclick=" connectWithSocialMedia(event)">Connect with Facebook</button>
//         <button id="connect-twitter" onclick=" connectWithSocialMedia(event)">Connect with Twitter</button>
//         <button id="connect-instagram" onclick=" connectWithSocialMedia(event)">Connect with Instagram</button></div> 
//     </div>
    


     
//     <div class="card great"  >
      
//       <input class="my-form" type="text" placeholder="Filter Contacts..." />
      
//       <div class="card great " id="list-container" >
//         <div class="row g-0" id="project">
          
//           <div class="col-md-8 ps-2 py-5">
//             <h5 class="card-title"><i class="fa-regular fa-file-signature"></i>Sohaib Abbass</h5>
//             <p class="card-text"><i class="fa-solid fa-envelope"></i> sohaib.abbass@gmail.com</p>
//             <p class="card-text"><i class="fa-solid fa-phone-volume"></i> +92**********</p>
//             <div class="button-group">
//               <button type="button" class="btn btn-primary">Edit</button>
//               <button type="button" onclick="deleteRecord()" class="btn btn-danger">Delete</button>
//             </div>
//           </div>
//           <div class="col-md-4 px-2 py-2 text-end">
//             <button type="button" class="btn btn-success mb-3 ">Professional</button>
//             <img src="img/pic.png" class="img-fluid rounded-start" alt="..."></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//     </div>
//   );
// }

// export default Body;
