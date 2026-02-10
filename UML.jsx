import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Layers, 
  ArrowRightLeft, 
  ChevronRight, 
  CheckCircle2, 
  Code2, 
  Layout, 
  Info,
  HelpCircle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Conceptos Básicos', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'usecase', title: 'Casos de Uso', icon: <Users className="w-5 h-5" /> },
    { id: 'class', title: 'Diagramas de Clases', icon: <Layers className="w-5 h-5" /> },
    { id: 'sequence', title: 'Diagramas de Secuencia', icon: <ArrowRightLeft className="w-5 h-5" /> },
    { id: 'quiz', title: 'Pon a prueba tu conocimiento', icon: <HelpCircle className="w-5 h-5" /> }
  ];

  const IntroSection = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">¿Qué es el Software?</h2>
        <p className="text-blue-900 leading-relaxed">
          Más allá de ser solo "programas", el software incluye la documentación, la configuración de datos y el diseño que hace que el hardware funcione. 
          Según Sommerville, el software debe ser <strong>mantenible, confiable, eficiente y usable</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl bg-white shadow-sm">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Code2 className="text-indigo-600" /> Ingeniería de Software
          </h3>
          <p className="text-gray-600 text-sm">
            Es la aplicación práctica del conocimiento científico al diseño y construcción de programas de computadora y a la documentación asociada requerida para desarrollarlos, operarlos y mantenerlos.
          </p>
        </div>
        <div className="p-4 border rounded-xl bg-white shadow-sm">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Layout className="text-indigo-600" /> Modelado con UML
          </h3>
          <p className="text-gray-600 text-sm">
            UML (Lenguaje de Modelado Unificado) es el estándar que usamos para visualizar, especificar y documentar los artefactos de un sistema de software. Es nuestro "lenguaje visual" universal.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">El Proceso de Generación de Software</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Requerimientos', 'Análisis', 'Diseño', 'Codificación', 'Pruebas', 'Mantenimiento'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-full border border-indigo-200 shadow-sm">
                {i + 1}. {step}
              </div>
              {i < 5 && <ChevronRight className="text-gray-400" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const UseCaseSection = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Diagrama de Casos de Uso</h2>
          <p className="text-gray-600">
            Responden a la pregunta: <strong>¿Qué hace el sistema?</strong> Describe las interacciones entre los usuarios (Actores) y el sistema para alcanzar un objetivo.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-bold mb-2">Elementos Clave:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-1 text-green-500" />
                <span><strong>Actor:</strong> Alguien o algo externo que interactúa con el sistema (ej. Cliente, Administrador).</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-1 text-green-500" />
                <span><strong>Caso de Uso:</strong> Una secuencia de acciones que proporciona un resultado de valor (ej. Retirar dinero).</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-1 text-green-500" />
                <span><strong>Sistema:</strong> El límite que define qué está dentro del software.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border p-4 rounded-xl shadow-md flex flex-col items-center justify-center">
          <h4 className="font-bold text-xs uppercase text-gray-400 mb-4">Ejemplo Visual: Cajero</h4>
          <svg width="200" height="180" viewBox="0 0 200 180" className="w-full h-auto">
            {/* Actor */}
            <circle cx="40" cy="60" r="10" stroke="black" strokeWidth="2" fill="none" />
            <line x1="40" y1="70" x2="40" y2="100" stroke="black" strokeWidth="2" />
            <line x1="25" y1="85" x2="55" y2="85" stroke="black" strokeWidth="2" />
            <line x1="40" y1="100" x2="25" y2="120" stroke="black" strokeWidth="2" />
            <line x1="40" y1="100" x2="55" y2="120" stroke="black" strokeWidth="2" />
            <text x="25" y="140" fontSize="12" fontWeight="bold">Usuario</text>

            {/* System Boundary */}
            <rect x="80" y="20" width="100" height="140" fill="none" stroke="#6366f1" strokeWidth="2" />
            <text x="85" y="35" fontSize="10" fill="#6366f1" fontWeight="bold">Cajero ATM</text>

            {/* Use Cases */}
            <ellipse cx="130" cy="70" rx="40" ry="20" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1" />
            <text x="105" y="73" fontSize="10">Retirar Dinero</text>
            
            <ellipse cx="130" cy="120" rx="40" ry="20" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1" />
            <text x="105" y="123" fontSize="10">Ver Saldo</text>

            {/* Associations */}
            <line x1="55" y1="85" x2="95" y2="75" stroke="#94a3b8" strokeDasharray="4" />
            <line x1="55" y1="85" x2="95" y2="115" stroke="#94a3b8" strokeDasharray="4" />
          </svg>
        </div>
      </div>
    </div>
  );

  const ClassSection = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-gray-800">Diagrama de Clases</h2>
      <p className="text-gray-600">
        Responde a la pregunta: <strong>¿Cómo es el sistema estructuralmente?</strong> Es el diagrama más común en el desarrollo orientado a objetos.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h4 className="font-bold text-purple-800 flex items-center gap-2 mb-2">
              <Info className="w-4 h-4" /> La anatomía de una Clase
            </h4>
            <div className="bg-white border-2 border-gray-800 w-48 mx-auto overflow-hidden rounded shadow-sm">
              <div className="bg-gray-100 p-2 border-b-2 border-gray-800 font-bold text-center">Persona</div>
              <div className="p-2 border-b-2 border-gray-800 text-sm text-gray-600">
                - nombre: String<br/>
                - edad: int
              </div>
              <div className="p-2 text-sm text-gray-600 italic">
                + caminar()<br/>
                + hablar(msj)
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            <strong>Relaciones:</strong> Las clases no están aisladas. Se conectan mediante <em>Herencia</em> (un Estudiante es una Persona) o <em>Asociación</em> (un Estudiante tiene un Curso).
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-700">Conceptos Clave:</h4>
          <div className="space-y-3">
            {[
              { t: 'Atributos', d: 'Propiedades o datos que la clase almacena.' },
              { t: 'Métodos', d: 'Acciones o comportamientos que la clase puede realizar.' },
              { t: 'Visibilidad', d: '+ (Público), - (Privado), # (Protegido).' }
            ].map(item => (
              <div key={item.t} className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 shrink-0" />
                <div>
                  <span className="font-bold block">{item.t}</span>
                  <span className="text-sm text-gray-600">{item.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SequenceSection = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-gray-800">Diagrama de Secuencia</h2>
      <p className="text-gray-600">
        Responde a la pregunta: <strong>¿Cómo interactúan los objetos en el tiempo?</strong> Muestra la lógica de una funcionalidad paso a paso.
      </p>

      <div className="bg-white border rounded-xl p-6 shadow-lg overflow-x-auto">
        <h4 className="text-center font-bold text-indigo-600 mb-8">Lógica de Login (Ejemplo)</h4>
        <div className="flex justify-around relative min-w-[500px]">
          {/* Lifelines */}
          {['Usuario', 'PantallaLogin', 'ServidorAutent'].map((obj, i) => (
            <div key={obj} className="flex flex-col items-center z-10">
              <div className="px-4 py-2 bg-gray-800 text-white rounded font-mono text-sm">{obj}</div>
              <div className="w-0.5 h-64 border-l-2 border-dashed border-gray-300 relative">
                {/* Activation bar example */}
                {i > 0 && <div className="absolute top-10 left-[-4px] w-2 h-40 bg-gray-200 border border-gray-400" />}
              </div>
            </div>
          ))}

          {/* Messages (SVG Overlay) */}
          <svg className="absolute top-16 left-0 w-full h-full pointer-events-none" style={{zIndex: 20}}>
            {/* 1. Ingresar credenciales */}
            <line x1="20%" y1="20" x2="48%" y2="20" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="25%" y="15" fontSize="12">1. ingresarDatos()</text>

            {/* 2. Enviar a servidor */}
            <line x1="52%" y1="50" x2="78%" y2="50" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="55%" y="45" fontSize="12">2. validar(u, p)</text>

            {/* 3. Respuesta servidor */}
            <line x1="78%" y1="80" x2="52%" y2="80" stroke="gray" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrow-gray)" />
            <text x="58%" y="75" fontSize="12" fill="gray">3. éxito/error</text>

            {/* 4. Mostrar resultado */}
            <line x1="48%" y1="110" x2="20%" y2="110" stroke="gray" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrow-gray)" />
            <text x="25%" y="105" fontSize="12" fill="gray">4. redirigirHome()</text>

            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="black" />
              </marker>
              <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="gray" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );

  const QuizSection = () => {
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState({});

    const questions = [
      { id: 1, q: "¿Qué diagrama muestra el comportamiento del sistema desde el punto de vista del usuario?", a: "Casos de Uso", options: ["De Clases", "Casos de Uso", "De Secuencia"] },
      { id: 2, q: "¿Qué símbolo representa un método público en UML?", a: "+", options: ["-", "#", "+"] },
      { id: 3, q: "¿Cómo se llama la línea vertical en un diagrama de secuencia?", a: "Línea de Vida", options: ["Línea de Vida", "Borde de Sistema", "Actor"] }
    ];

    const handleAnswer = (qId, option) => {
      if (answered[qId]) return;
      const isCorrect = option === questions.find(q => q.id === qId).a;
      if (isCorrect) setScore(s => s + 1);
      setAnswered({ ...answered, [qId]: option });
    };

    return (
      <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
        <div className="text-center p-4 bg-indigo-600 text-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Laboratorio de Repaso</h2>
          <p className="text-indigo-100">Puntaje: {score} / {questions.length}</p>
        </div>

        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <p className="font-semibold mb-3">{q.q}</p>
              <div className="flex flex-wrap gap-2">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt)}
                    disabled={answered[q.id]}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      answered[q.id] === opt 
                        ? (opt === q.a ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <header className="bg-indigo-700 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Ingeniería de Software & UML</h1>
            <p className="text-indigo-100 max-w-2xl text-lg font-light">
              Módulo Introductorio: El Proceso de Generación y Modelado de Sistemas.
            </p>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <Code2 size={200} />
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto bg-slate-100 border-b p-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all shrink-0 ${
                activeTab === s.id 
                  ? 'bg-white text-indigo-700 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {s.icon}
              {s.title}
            </button>
          ))}
        </nav>

        {/* Main Content Area */}
        <main className="p-6 md:p-10 min-h-[500px]">
          {activeTab === 'intro' && <IntroSection />}
          {activeTab === 'usecase' && <UseCaseSection />}
          {activeTab === 'class' && <ClassSection />}
          {activeTab === 'sequence' && <SequenceSection />}
          {activeTab === 'quiz' && <QuizSection />}
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 border-t p-6 text-center text-sm text-gray-500">
          <p>© 2024 - Curso de Telemática & Ingeniería de Software. Elaborado con fines pedagógicos.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;