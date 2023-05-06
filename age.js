function getAge()
{
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let dateOfBirth = document.getElementById("dob").value;

    let birthYear = new Date(dateOfBirth).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - birthYear;

    let submit = document.getElementById("sub");
    submit.textContent =  firstName + " " + lastName + " " + "Your age is" + " " + age + " "+ "years";
      
}




