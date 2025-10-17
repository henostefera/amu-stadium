import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import stadiumLogo from "@/assets/stadium-logo.jpg";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 transition-stadium hover:opacity-80">
          <img 
            src={stadiumLogo} 
            alt="Arbaminch Stadium Logo" 
            className="h-12 w-12 rounded-full object-cover shadow-stadium"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold font-poppins text-foreground leading-tight">
              Arbaminch Stadium
            </h1>
            <p className="text-xs text-muted-foreground">Official Lottery</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          {!isHomePage && (
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link to="/">Home</Link>
            </Button>
          )}
          
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link to="/tickets">My Tickets</Link>
          </Button>

          <Button asChild className="gradient-hero text-primary-foreground hover:opacity-90 transition-stadium">
            <Link to="/buy">Buy Ticket</Link>
          </Button>

          {/* Login button added */}
          <Button asChild className="bg-stadium-green text-white hover:bg-green-600 transition-stadium">
            <Link to="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
