
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
Website working Video - https://github.com/Revant202/tryo/assets/76607683/4cd7c0f0-435d-435b-bc50-a31d0a4b33c6

![landing](https://github.com/Revant202/tryo/assets/76607683/6c626d94-37f2-4d20-96c0-25ff17b7dc87)
![login](https://github.com/Revant202/tryo/assets/76607683/28726cc6-c479-488d-b09a-6044915b0992)
![register](https://github.com/Revant202/tryo/assets/76607683/0c8477c5-3fad-4b44-a95c-4fd84caac7a3)
![search](https://github.com/Revant202/tryo/assets/76607683/a6318d52-4d88-4ac5-8a68-056412184636)
![job details](https://github.com/Revant202/tryo/assets/76607683/3825c7b8-79f8-42f0-ae4c-e1bca8dec447)
![dashboard](https://github.com/Revant202/tryo/assets/76607683/48b2c3ad-706d-4639-b4e5-4e84d26f92aa)
![posted jobs](https://github.com/Revant202/tryo/assets/76607683/08b665d8-ae9d-41fc-985d-c6817fcdd095)
![posted job dashboard](https://github.com/Revant202/tryo/assets/76607683/53335379-1909-4d67-88e8-997f854f80a2)
![avaliable jobs](https://github.com/Revant202/tryo/assets/76607683/91f2518f-13f2-451e-929b-14bc19301e29)
![apply job](https://github.com/Revant202/tryo/assets/76607683/317f42c9-9eb6-4ac5-86f9-20af414933dc)
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
## Deployment
https://tryo.vercel.app/
