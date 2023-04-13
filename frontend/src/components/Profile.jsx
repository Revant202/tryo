import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export const Profile = () => {


  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 365);






  const ontheweb=[
    {
      "name":"Linkedin",
      "icon":"https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg",
    },
    {
      "name":"Github",
      "icon":"https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg",
    },
    {
      "name":"Facebook",
      "icon":"https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg",
    },
    {
      "name":"Twitter",
      "icon":"https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg",
    },
    {
      "name":"Instagram",
      "icon":"https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg",
    },
    {
      "name":"Your website",
      "icon":"https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg",
    }

  ]





  return (
    <div className='mt-[165px] ml-[9.5vh]'>





        <div className='border bg-[#F2F5FA]  px-[40px]'>
          
            <div class="mt-[25px]">
              <div className='flex flex-row justify-between mb-[20px]'>
                <label for="large-input" class="block  text-[16px] font-bold text-gray-900 dark:text-white">ABOUT ME</label>
                  <button  class="h-[28px] w-[90px] text-[13px] bg-[#f3912e] hover:bg-blue-400 text-white font-bold rounded">
                  Edit
                </button>
              </div>
              <textarea type="text" id="large-input" class="block w-full p-3 rounded-lg h-[120px]"  placeholder='Add something about you.'/>
            </div>

          
            <div className='border-t-2 w-full mt-6'></div>


            <div class="mt-[16px]">
              <div className='flex flex-row justify-between mb-[20px]'>
                <label for="large-input" class="block  text-[16px] font-bold text-gray-900 dark:text-white">CIPHER MAP</label>
              </div>


              <div className='w-[80vw]'>

                <CalendarHeatmap
                  startDate={startDate}
                  numDays={365}
                  showWeekdayLabels={true}
                  values={[
                    { date: '2023-01-01', count: 12 },
                    { date: '2023-01-22', count: 122 },
                    { date: '2023-01-2', count: 38 },
                  ]}
                />
              </div>
            </div>


            <div className='border-t-2 w-full mt-6'></div>



          <div class="mt-[16px]">
              <div className='flex flex-row justify-between '>
                <label for="large-input" class="block  text-[16px] font-bold text-gray-900 dark:text-white">ON THE WEB</label>
                  <button  class="h-[28px] w-[90px] text-[13px] bg-[#f3912e] hover:bg-blue-400 text-white font-bold rounded">
                  Edit
                </button>
              </div>




              <div className='grid-cols-2 grid'>


                {ontheweb.map((item) => {

                return <div class="mt-[16px]">
                  
                    <div className='flex flex-row justify-between mb-[10px]'>
                      <label for="large-input" class="block text-[16px] font-semibold text-gray-900 dark:text-white">{item.name}</label>
                    </div>

                    <div class="relative">

                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img src={item.icon} alt={item.name} class={item.name}/></div>
                      
                      <input type="search" id="default-search" class="block w-[35vw] h-[40px] pl-12 pr-10 text-sm rounded-lg " placeholder={item.name}/>
                
                    </div>

                </div>

                })}
              </div>

          </div>





          <div className='border-t-2 w-full mt-6'></div>


          <div class="mt-[16px]">
            <div className='flex flex-row justify-between mb-[20px]'>
              <label for="large-input" class="block  text-[16px] font-bold text-gray-900 dark:text-white">PROFESSIONAL INFORMATION</label>
            </div>






          



          </div>







        
        </div>


  
    
    
        





    </div>
  )
}
