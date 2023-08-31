
# Tryo

A Job portal where you can explore, apply or post jobs.




## Tech Stack

- Next JS 
- Redux Toolkit
- TailwindCSS  
- Mongo DB  
- JWT





## Screenshots


#### Loading Screen
![Website Video]https://github.com/Revant202/tryo/assets/76607683/4cd7c0f0-435d-435b-bc50-a31d0a4b33c6
![landing](https://github.com/Revant202/tryo/assets/76607683/16f7f412-6414-4fee-861a-f35f69c86a85)
![login](https://github.com/Revant202/tryo/assets/76607683/f790c597-c9a5-4c86-8809-cb3fb7e971cd)
![register](https://github.com/Revant202/tryo/assets/76607683/64ebc610-cd06-4dc2-82d8-c83e6ccc1a6e)
![dashboard](https://github.com/Revant202/tryo/assets/76607683/93a1b9b7-b48b-4d1a-b3e5-4f97396e66ae)
![search](https://github.com/Revant202/tryo/assets/76607683/af685bd8-83f6-4f0c-8485-7ba0168149fc)
![posted jobs](https://github.com/Revant202/tryo/assets/76607683/aa0b8e73-ed40-4e43-bfe7-115af66edb26)
![job details](https://github.com/Revant202/tryo/assets/76607683/ab44f38f-5de7-46e2-9390-ea11e3f654a5)


## Features




- SignIn / SignUp
- Forget Password
- Post A Job
- View  All Jobs
- View Details of Any Job
- BookMark Jobs
- Track Your BookMark Jobs in DataTable View
- Track Your Applied Jobs in DataTable View 
- Track Your Posted Jobs and view Submitted Application 
- Accept and Reject Different Application 
- Status Updated for applied Job based on Job poster action 
- JWT validation on each Authorized Request
- View or download Applicant CV's
#### Vercel Don't allow write operation in free plan so CV are unable to saved in production, but works fine in local App

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI` = Your mongoDB URL

`JWT_SECRET` = Your custom JWT_SECRET key

`NEXT_PUBLIC_API_BASE_URL` =  Base URL for localhost  => http://localhost:3000


## Installation

Install my-project with npm

```bash
  npm install
  npm run dev (for development server)
  npm run build (for Production)
  npm run preview (To View Production Server )
```
