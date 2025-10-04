import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(Math.floor(Math.random() * 50) + 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "Sword",
      title: "PvP Арены",
      description: "Сражайтесь с игроками в эпических битвах"
    },
    {
      icon: "Home",
      title: "Свой город",
      description: "Стройте дома и развивайте территорию"
    },
    {
      icon: "Zap",
      title: "Уникальные режимы",
      description: "Выживание, креатив, мини-игры и квесты"
    },
    {
      icon: "Users",
      title: "Дружное комьюнити",
      description: "Находите друзей и создавайте кланы"
    }
  ];

  const stats = [
    { value: onlinePlayers, label: "Игроков онлайн", icon: "Users" },
    { value: "1.20.1", label: "Версия", icon: "Package" },
    { value: "24/7", label: "Аптайм", icon: "Clock" },
    { value: "5+", label: "Режимов", icon: "Gamepad2" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 animate-float">
            <div className="w-32 h-32 mx-auto bg-primary minecraft-border pixel-corners flex items-center justify-center text-6xl">
              👻
            </div>
          </div>
          <h1 className="text-7xl font-black mb-4 text-primary drop-shadow-[0_0_30px_rgba(46,204,113,0.5)] tracking-wider">
            GHASTLAND
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Лучший Minecraft сервер с уникальными режимами игры. Присоединяйся к тысячам игроков!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 minecraft-border pixel-corners font-bold animate-pulse-glow"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Подключиться
            </Button>
            <div className="bg-card minecraft-border pixel-corners px-6 py-3">
              <code className="text-primary text-lg font-mono">play.ghastland.ru</code>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center minecraft-border pixel-corners bg-card/50 backdrop-blur hover:bg-card transition-all hover:scale-105"
            >
              <Icon 
                name={stat.icon as any} 
                className="mx-auto mb-3 text-primary" 
                size={32} 
              />
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Особенности сервера
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 minecraft-border pixel-corners bg-card/50 backdrop-blur hover:bg-card transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)]"
              >
                <div className="w-16 h-16 bg-primary/20 minecraft-border pixel-corners flex items-center justify-center mb-4">
                  <Icon 
                    name={feature.icon as any} 
                    className="text-primary" 
                    size={32} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 minecraft-border pixel-corners bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-primary">
                Готов начать приключение?
              </h2>
              <p className="text-muted-foreground text-lg">
                Присоединяйся прямо сейчас и получи стартовый набор!
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground minecraft-border pixel-corners font-bold text-xl px-8 py-6 whitespace-nowrap"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Играть сейчас
            </Button>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Users" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm">
            © 2025 GhastLand. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
