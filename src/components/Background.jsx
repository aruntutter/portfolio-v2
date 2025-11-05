const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[linear-gradient(135deg,#0f0f1e_0%,#1a1a2e_50%,#16213e_100%)]">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[50px_50px] opacity-40 pointer-events-none" />

      {/* Shapes */}
      <div className="absolute top-[15%] right-[20%] w-[150px] h-[150px] rounded-full border border-[#3b83f642] animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-[20%] left-[15%] w-[100px] h-[100px] rounded-full border border-[#3b83f642] animate-[float_20s_ease-in-out_infinite_5s]" />

      <div className="absolute top-[40%] left-[5%] w-20 h-20 rotate-45 border border-[#3b83f642] animate-[rotate-reverse_25s_linear_infinite]" />
      <div className="absolute bottom-[30%] right-[10%] w-[120px] h-[120px] rotate-45 border border-[#3b83f642] animate-[rotate-reverse_25s_linear_infinite]" />

      {/* Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
          
        @keyframes rotate-reverse {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
      `}</style>
    </div>
  );
};

export default Background;
