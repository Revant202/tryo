
# Tryo

A Job portal where you can explore, apply or post jobs.




## Tech Stack

- Next JS 
- Redux Toolkit
- TailwindCSS  
- Mongo DB  
- JWT


## Deployment
https://tryo.vercel.app/


## Screenshots

#### landing
![landing](https://github.com/Revant202/tryo/assets/76607683/22444d88-9ac8-487c-91d2-2f3987332267)
#### login
![login](https://github.com/Revant202/tryo/assets/76607683/96f3576d-76ee-4299-bf1d-9b83b07786c9)
#### register
![register](https://github.com/Revant202/tryo/assets/76607683/91a94274-5486-4519-91cb-c6802900ff61)
#### search
![search](https://github.com/Revant202/tryo/assets/76607683/00e43245-eb59-48b8-b4d0-1d59d3f4d461)
#### job details
![job details](https://github.com/Revant202/tryo/assets/76607683/5205a027-01d0-47a4-a2cc-01467bc28242)
#### dashboard
![dashboard](https://github.com/Revant202/tryo/assets/76607683/186f2588-768d-43f7-a49f-7c0a96bbfb47)
#### posted jobs
![posted jobs](https://github.com/Revant202/tryo/assets/76607683/0e933910-a529-4a18-b983-ffdc936c0c3c)
#### post a job
![post job](https://github.com/Revant202/tryo/assets/76607683/52db55dc-fe7d-4162-a070-3fa80166e0a3)
#### posted job dashboard
![posted job dashboard](https://github.com/Revant202/tryo/assets/76607683/76487611-6efa-4e78-9587-13607063cb0d)
#### available jobs
![avaliable jobs](https://github.com/Revant202/tryo/assets/76607683/72c53ee1-7457-4eab-bc85-0cdfa3b37441)
#### apply job
![apply job](https://github.com/Revant202/tryo/assets/76607683/2aa09dce-f927-4988-88c9-fcd95ba81b81)
#### loading screen
![loading screen](https://github.com/Revant202/tryo/assets/76607683/6b01b68c-0c7b-4c10-97df-2d19df31cbcc)



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

