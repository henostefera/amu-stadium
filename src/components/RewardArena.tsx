import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Gift, Car, Home } from "lucide-react";
import prizeTrophy from "@/assets/prize-trophy.jpg";

const prizes = [
  { icon: Trophy, title: "Grand Prize", value: "5,000,000 ETB", description: "Life-changing jackpot", bgColor: "bg-accent/10", textColor: "text-accent" },
  { icon: Car, title: "2nd Prize", value: "Brand New Car", description: "Luxury vehicle", bgColor: "bg-primary/10", textColor: "text-primary" },
  { icon: Home, title: "3rd Prize", value: "1,000,000 ETB", description: "Cash prize", bgColor: "bg-secondary/10", textColor: "text-secondary" },
  { icon: Gift, title: "Multiple Prizes", value: "100+ Winners", description: "Cash & rewards", bgColor: "bg-muted", textColor: "text-foreground" },
  // Duplicate prizes for seamless scrolling
  { icon: Trophy, title: "Grand Prize", value: "5,000,000 ETB", description: "Life-changing jackpot", bgColor: "bg-accent/10", textColor: "text-accent" },
  { icon: Car, title: "2nd Prize", value: "Brand New Car", description: "Luxury vehicle", bgColor: "bg-primary/10", textColor: "text-primary" },
  { icon: Home, title: "3rd Prize", value: "1,000,000 ETB", description: "Cash prize", bgColor: "bg-secondary/10", textColor: "text-secondary" },
  { icon: Gift, title: "Multiple Prizes", value: "100+ Winners", description: "Cash & rewards", bgColor: "bg-muted", textColor: "text-foreground" },
];

const RewardArena = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-stadium-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins">Reward Arena</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Win incredible prizes while supporting Ethiopia's sports future
          </p>
        </div>

        {/* Rotating carousel */}
      <div className="relative overflow-hidden">
  <div className="flex w-max animate-scroll-cards">
    {prizes.concat(prizes).map((prize, index) => (
      <Card
        key={index}
        className="shadow-stadium hover:shadow-lg transition-stadium border-2 hover:border-primary w-72 mx-2 flex-shrink-0"
      >
        <CardHeader className="text-center pb-4">
          <div className={`mx-auto mb-4 p-4 rounded-full ${prize.bgColor} w-fit`}>
            <prize.icon className={`w-8 h-8 ${prize.textColor}`} />
          </div>
          <CardTitle className="font-raleway text-xl">{prize.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-bold font-poppins text-primary mb-2">{prize.value}</p>
          <p className="text-sm text-muted-foreground">{prize.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>



        <div className="flex justify-center mt-12">
          <img src={prizeTrophy} alt="Championship Trophy" className="w-32 h-32 object-contain animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default RewardArena;
