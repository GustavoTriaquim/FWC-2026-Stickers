function LoadingScreen() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-copa-green border-t-transparent animate-spin" />
        <p className="font-mono text-text-muted text-xs tracking-widest">
          CARREGANDO...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
