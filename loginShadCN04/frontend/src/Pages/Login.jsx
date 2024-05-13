import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
  import {Input} from "@/components/ui/input"
  function Login(){
     return(
        <Card className="w-[350px] mt-20">
  <CardHeader className="text-center">
    <CardTitle>Login</CardTitle>
    <CardDescription>basic login page</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-2 item-start space-y-2">
     <Label htmlForm="email" className="text-center font-normal">Email</Label>
     <Input id="email" types="email" placeholder="xyz@gmail.com"/>
    </div>
    <div className="grid gap-2 item-start space-y-2 mt-7">
     <Label htmlForm="password" className="text-center font-normal">password</Label>
     <Input id="password" types="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button>Create an account</Button>
  </CardFooter>
</Card>

     )
  }

  export default Login