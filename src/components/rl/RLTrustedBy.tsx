const RLTrustedBy = () => {
  const partners = [
    { name: "PTT", logo: "PTT" },
    { name: "SCG", logo: "SCG" },
    { name: "Toyota", logo: "TOYOTA" },
    { name: "Bank of Thailand", logo: "BOT" },
    { name: "AOT", logo: "AOT" },
    { name: "CP Group", logo: "CP" },
    { name: "Kasikorn Bank", logo: "KBANK" },
    { name: "True Corporation", logo: "TRUE" },
    { name: "DTAC", logo: "DTAC" },
    { name: "Minor Group", logo: "MINOR" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Trusted by Leading Organizations
          </h3>
          <p className="text-muted-foreground">
            We've partnered with Thailand's most innovative companies to develop their talent
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLTrustedBy;