import { Search, Bell } from '@nandorojo/iconic'
import { View,  Text, ScrollView } from "app/design/view";

function Nav(){
    return(
        <View className="flex-1 flex-row">
            <Search />
            <Bell className='' />
            <Text className="bg-red-100">Sing Up</Text>
            
            

        </View>
    )
}

export default Nav;