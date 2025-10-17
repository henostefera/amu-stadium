import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/10">
      <Card className="w-full max-w-md p-6 shadow-stadium border-2 border-stadium-green/40 animate-fade-in">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold font-poppins text-foreground">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Email or Phone
              </label>
              <Input
                id="email"
                type="text"
                placeholder="Enter email or phone"
                className="bg-background text-foreground"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                className="bg-background text-foreground"
              />
            </div>

            <Button
              type="submit"
              className="bg-stadium-green text-white hover:bg-green-600 transition-stadium mt-2"
            >
              Login
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-stadium-green hover:underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
