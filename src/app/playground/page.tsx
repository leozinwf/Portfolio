"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beaker, Cpu, Sliders, Sparkles, Terminal, RefreshCw, Layers } from "lucide-react";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Opções de templates para o Simulador de Geração de UI por IA
const promptTemplates = [
  { id: "hud", text: "Dashboard Holográfico de Telemetria Orbital" },
  { id: "neural", text: "Interface Conectiva de Rede Neural Quântica" },
  { id: "cyber", text: "Painel Crítico de Segurança Criptográfica" }
];

export default function PlaygroundPage() {
  // Estados para o Painel de Controle de Experimento de UI
  const [kineticSpeed, setKineticSpeed] = useState<number>(2);
  const [glowIntensity, setGlowIntensity] = useState<boolean>(true);
  const [gridDensity, setGridDensity] = useState<number>(6);

  // Estados para o Simulador de Geração por IA
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationLogs, setGenerationLogs] = useState<string[]>([]);
  const [activeUiState, setActiveUiState] = useState<string>("idle");

  // Função para simular o pipeline de pensamento e geração de UI de uma IA
  const handleAiSimulation = async (type: string, promptText: string) => {
    if (isGenerating) return;
    setSelectedPrompt(type);
    setIsGenerating(true);
    setActiveUiState("generating");
    setGenerationLogs([]);

    const logs = [
      "🤖 [AI Engine] Inicializando matriz de pensamento criativo...",
      "🔍 Mapeando tokens semânticos: '" + promptText + "'",
      "📐 Estruturando layout adaptável e árvores de componentes...",
      "✨ Aplicando heurísticas de UX e fluxos de percepção visual...",
      "🎨 Injetando tokens de design e variáveis cinemáticas...",
      "⚡ Compilação de interface concluída com sucesso."
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setGenerationLogs((prev) => [...prev, logs[i]]);
    }

    setIsGenerating(false);
    setActiveUiState(type);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-20 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-purple/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6"
        >
          <Beaker className="w-3.5 h-3.5 text-accent-purple" />
          <span>Experimental Lab & Prototipagem</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          O Playground. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-neutral-400">
            Onde ideias ganham vida.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Um espaço interativo dedicado a conceitos conceituais de UI, experimentos dirigidos por Inteligência Artificial e testes avançados de animação matemática.
        </motion.p>
      </section>

      {/* --- EXPERIMENTO PRINCIPAL INTERATIVO --- */}
      <section className="container mx-auto px-4 md:px-8 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
        
        {/* COLUNA ESQUERDA: PAINEL DE CONTROLE (4 Colunas) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Caixa 1: Controles de Física Visual */}
          <div className="p-6 rounded-3xl border border-border/50 bg-surface/20 backdrop-blur-sm flex flex-col gap-6">
            <div className="flex items-center gap-2 font-semibold text-sm font-mono tracking-wider uppercase text-neutral-400">
              <Sliders className="w-4 h-4 text-accent-purple" />
              <span>Parâmetros de Matriz</span>
            </div>

            {/* Slider 1: Velocidade Cinética */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span>Frequência Cinética</span>
                <span className="text-accent-purple font-bold">{kineticSpeed}x</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={kineticSpeed}
                onChange={(e) => setKineticSpeed(Number(e.target.value))}
                className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-accent-purple"
                aria-label="Ajustar velocidade da animação"
              />
            </div>

            {/* Slider 2: Densidade de Grid */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span>Densidade de Células</span>
                <span className="text-accent-purple font-bold">{gridDensity}x{gridDensity}</span>
              </div>
              <input 
                type="range" 
                min="4" 
                max="10" 
                value={gridDensity}
                onChange={(e) => setGridDensity(Number(e.target.value))}
                className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-accent-purple"
                aria-label="Ajustar densidade das células do grid"
              />
            </div>

            {/* Toggle 3: Efeito de Brilho Aura */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono">Aura Luminescente</span>
              <button
                onClick={() => setGlowIntensity(!glowIntensity)}
                className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${glowIntensity ? 'bg-accent-purple' : 'bg-border'}`}
                aria-label="Alternar brilho luminescente"
              >
                <motion.div 
                  className="w-4 h-4 rounded-full bg-white absolute top-0.5 left-0.5"
                  animate={{ x: glowIntensity ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </div>

          {/* Caixa 2: Gatilhos Generativos de IA */}
          <div className="p-6 rounded-3xl border border-border/50 bg-surface/20 backdrop-blur-sm flex flex-col gap-4">
            <div className="flex items-center gap-2 font-semibold text-sm font-mono tracking-wider uppercase text-neutral-400">
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span>Prompt Generativo UI</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Selecione um conceito cognitivo abstrato para comandar a renderização cinemática da nossa matriz experimental:
            </p>

            <div className="flex flex-col gap-2 mt-2">
              {promptTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleAiSimulation(template.id, template.text)}
                  disabled={isGenerating}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all duration-300 flex items-center justify-between group ${
                    selectedPrompt === template.id 
                      ? 'border-accent-purple bg-accent-purple/5 text-white' 
                      : 'border-border/60 bg-background/40 hover:border-accent-blue/40 text-neutral-400 hover:text-white'
                  }`}
                  aria-label={`Simular interface para ${template.text}`}
                >
                  <span className="truncate">{template.text}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* COLUNA DIREITA: CANVAS INTERATIVO DE COMPOSIÇÃO (8 Colunas) */}
        <div className="lg:col-span-8 p-6 rounded-3xl border border-border/60 bg-surface/10 backdrop-blur-md flex flex-col gap-6 relative min-h-[450px]">
          
          {/* Cabeçalho do Canvas */}
          <div className="flex items-center justify-between border-b border-border/40 pb-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Viewport Experimental Ativo</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Estado: <strong className="uppercase text-accent-blue">{activeUiState}</strong></span>
              <button 
                onClick={() => {
                  setActiveUiState("idle");
                  setSelectedPrompt("");
                  setGenerationLogs([]);
                }}
                className="hover:text-white transition-colors"
                aria-label="Resetar visualização para o estado padrão"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ÁREA CENTRAL DO CANVAS DINÂMICO */}
          <div className="flex-1 w-full relative flex items-center justify-center rounded-2xl bg-background/50 border border-border/40 overflow-hidden min-h-[300px]">
            
            {/* EFEITO DE GLOW DINÂMICO BASEADO NO STATE DO SLIDER */}
            {glowIntensity && (
              <div className="absolute inset-0 bg-accent-purple/[0.02] blur-3xl pointer-events-none transition-opacity duration-500"></div>
            )}

            <AnimatePresence mode="wait">
              
              {/* ESTADO 1: IDLE / PADRÃO (Grid Matemático Dinâmico) */}
              {activeUiState === "idle" && (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-8 flex items-center justify-center"
                >
                  <div 
                    className="grid gap-2 w-full max-w-sm aspect-square"
                    style={{ gridTemplateColumns: `repeat(${gridDensity}, minmax(0, 1fr))` }}
                  >
                    {Array.from({ length: gridDensity * gridDensity }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="rounded-md bg-surface border border-border/40 shadow-sm"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.04, 1],
                        }}
                        transition={{
                          duration: 3 / kineticSpeed,
                          repeat: Infinity,
                          delay: (i % gridDensity) * 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ESTADO 2: PROCESSO GENERATIVO (Logs em tempo real) */}
              {activeUiState === "generating" && (
                <motion.div 
                  key="generating"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-6 font-mono text-[11px] text-neutral-400 flex flex-col justify-end gap-2 relative"
                >
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-accent-purple text-xs font-bold animate-pulse">
                    <Terminal className="w-4 h-4" />
                    <span>AI COMPILING INTEGRATION NODE...</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 max-w-xl text-left">
                    {generationLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={index === generationLogs.length - 1 ? "text-accent-blue font-semibold" : ""}
                      >
                        {log}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ESTADO 3: DESIGN CONCEITO - HUD ORBITAL */}
              {activeUiState === "hud" && (
                <motion.div 
                  key="hud"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-6 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue block">Telemetry Node</span>
                      <h4 className="text-base font-bold">ORBITAL MATRIX V4</h4>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-accent-blue/30 bg-accent-blue/10 text-accent-blue animate-pulse">SYS_ACTIVE</span>
                  </div>

                  <div className="w-full flex justify-center py-6">
                    {/* Anel HUD Cinematográfico */}
                    <motion.div 
                      className="w-32 h-32 rounded-full border-2 border-dashed border-accent-blue/40 flex items-center justify-center relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12 / kineticSpeed, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div 
                        className="w-24 h-24 rounded-full border border-solid border-accent-purple/40 flex items-center justify-center"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6 / kineticSpeed, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="text-xs font-mono font-bold tracking-widest text-neutral-300">98.2%</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-left font-mono text-[10px]">
                    <div className="p-2 border border-border/50 bg-surface/30 rounded-lg">
                      <span className="opacity-50 block">ALTITUDE</span>
                      <span className="font-bold text-white">421.8 KM</span>
                    </div>
                    <div className="p-2 border border-border/50 bg-surface/30 rounded-lg">
                      <span className="opacity-50 block">VELOCITY</span>
                      <span className="font-bold text-white">7.66 KM/S</span>
                    </div>
                    <div className="p-2 border border-border/50 bg-surface/30 rounded-lg">
                      <span className="opacity-50 block">LATENCY</span>
                      <span className="font-bold text-emerald-500">12 MS</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ESTADO 4: DESIGN CONCEITO - REDE NEURAL */}
              {activeUiState === "neural" && (
                <motion.div 
                  key="neural"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-6 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 border border-border/60 bg-surface/40 px-3 py-1.5 rounded-full w-fit text-[11px] font-mono">
                    <Layers className="w-3.5 h-3.5 text-accent-purple" />
                    <span>COGNITIVE CORE SYNC</span>
                  </div>

                  <div className="flex flex-col gap-2 max-w-sm w-full mx-auto my-6">
                    {[
                      { label: "Synaptic Weight", val: "0.9942", color: "bg-accent-purple" },
                      { label: "Tensor Capacity", val: "84.1%", color: "bg-accent-blue" },
                      { label: "Heuristic Match", val: "PASS", color: "bg-emerald-500" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex flex-col gap-1.5 text-left font-mono text-xs">
                        <div className="flex justify-between opacity-80">
                          <span>{row.label}</span>
                          <span>{row.val}</span>
                        </div>
                        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${row.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: row.val.includes("%") ? row.val : "100%" }}
                            transition={{ duration: 1.2, ease: cinematicEasing }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono opacity-40 text-center block">Model Architecture: Transformers / Node Matrix Alpha</span>
                </motion.div>
              )}

              {/* ESTADO 5: DESIGN CONCEITO - CRYPTO PANELS */}
              {activeUiState === "cyber" && (
                <motion.div 
                  key="cyber"
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-6 flex flex-col justify-between font-mono"
                >
                  <div className="flex justify-between items-center text-[11px] text-red-500 font-bold border-b border-red-500/20 pb-3">
                    <span>SECURITY ISOLATION LAYER</span>
                    <span className="animate-pulse">SECURE LOCK</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-6 text-left text-xs">
                    <div className="p-3 border border-border/60 rounded-xl bg-background/80 flex flex-col gap-1">
                      <span className="text-[10px] opacity-40">ENCRYPTION SEED</span>
                      <span className="text-white truncate font-bold">0x7F49B...CE9A</span>
                    </div>
                    <div className="p-3 border border-border/60 rounded-xl bg-background/80 flex flex-col gap-1">
                      <span className="text-[10px] opacity-40">PERIMETER LOGS</span>
                      <span className="text-emerald-500 font-bold">0 BREACHES DETECTED</span>
                    </div>
                  </div>

                  <div className="w-full text-center py-2 bg-surface rounded-xl border border-border/40 text-[10px] opacity-60">
                    Cryptographic Tunnel Key: Active via Cloud Shield Node
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>
      </section>

    </div>
  );
}