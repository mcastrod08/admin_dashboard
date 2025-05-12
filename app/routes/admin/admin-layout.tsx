import React from 'react'
import { Outlet } from 'react-router';
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { MobileSidebar, NavItems } from 'components';
import { redirect } from 'react-router'
import { account } from '~/appwrite/client';
import { getExistingUser, storeUserData } from '~/appwrite/auth';


//loader

export async function clientLoader() {
  try {
      const user = await account.get();

      if(!user.$id) return redirect('/sign-in');

      const existingUser = await getExistingUser(user.$id);

      if(existingUser?.status === 'user' ) {
      
        redirect('/');
      }

     

      return existingUser?.$id ? existingUser : await storeUserData();
      
  } catch (e) {
      console.log('Error in clientLoader', e)
      return redirect('/sign-in')
  }
}



const AdminLayout = () => {
  return (
    <div className="admin-layout">
        <MobileSidebar/>
        <aside className="w-full max-w-[270px] hidden lg:block">
            <SidebarComponent>
              <NavItems/>
            </SidebarComponent>
        </aside>
        <aside className="children">
            <Outlet/>
        </aside>
    </div>
  )
}

export default AdminLayout;