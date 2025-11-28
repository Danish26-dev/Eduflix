import React, { useState } from 'react';

const GenerateCard = () => {
    const [topic, setTopic] = useState('');
    const [language, setLanguage] = useState('English');
    const [difficulty, setDifficulty] = useState('School');
    const [duration, setDuration] = useState('60 sec');
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [videoUrl, setVideoUrl] = useState(null);
    const [quizData, setQuizData] = useState(null);
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

    // Predefined videos and quizzes
    const videoDatabase = {
      "bernoulli's principle": {
        // Updated to use locally generated video (copied to /public/videos/)
        videoUrl: '/videos/bernoullis-principle.mp4',
        title: "Bernoulli's Principle",
        description: "Understanding the relationship between fluid speed and pressure",
        quiz: [
          {
            type: 'what',
            question: "What is Bernoulli's Principle?",
            options: [
              "A principle stating that pressure decreases as fluid speed increases",
              "A principle about gravity and motion",
              "A principle about heat transfer",
              "A principle about electrical conductivity"
            ],
            correct: 0
          },
          {
            type: 'why',
            question: "Why does pressure decrease when fluid speed increases?",
            options: [
              "Because of conservation of energy - kinetic energy increases as pressure energy decreases",
              "Because of friction",
              "Because of temperature changes",
              "Because of molecular size"
            ],
            correct: 0
          },
          {
            type: 'how',
            question: "How can we observe Bernoulli's Principle in everyday life?",
            options: [
              "When you blow air between two papers, they come together",
              "When ice melts in water",
              "When sound travels through air",
              "When light reflects off mirrors"
            ],
            correct: 0
          }
        ]
      },
      "4x4 matrix exponentiation": {
        // Hosted sample video for demo purposes
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        title: "4x4 Matrix Exponentiation",
        description: "Computing powers of 4x4 matrices using efficient algorithms",
        quiz: [
          {
            type: 'what',
            question: "What is matrix exponentiation?",
            options: [
              "Raising a matrix to a power by multiplying it by itself",
              "Adding exponents to matrix elements",
              "Taking the square root of a matrix",
              "Dividing matrix elements by exponents"
            ],
            correct: 0
          },
          {
            type: 'why',
            question: "Why is matrix exponentiation used in computer science?",
            options: [
              "For solving linear recurrence relations, graph problems, and transformations",
              "For making matrices smaller",
              "For converting matrices to vectors",
              "For simplifying calculations only"
            ],
            correct: 0
          },
          {
            type: 'how',
            question: "How do we efficiently compute matrix exponentiation?",
            options: [
              "Using binary exponentiation (fast exponentiation) to reduce complexity to O(log n)",
              "By multiplying the matrix by itself n times",
              "By adding matrix elements n times",
              "By transposing the matrix n times"
            ],
            correct: 0
          }
        ]
      }
    };

    const N8N_WEBHOOK_URL = 'https://automationforeduflix.app.n8n.cloud/webhook/7b1eeb5a-e64c-4406-8664-80691b13fa79';

    const handleGenerateLesson = async (e) => {
        e.preventDefault();
        
        if (!topic.trim()) {
            setError('Please enter a topic');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');
        setVideoUrl(null);
        setQuizData(null);
        setCurrentQuizIndex(0);

        try {
          // Check if topic matches predefined videos
          const lowerTopic = topic.toLowerCase().trim();
          let videoData = null;

          for (const [key, data] of Object.entries(videoDatabase)) {
            if (lowerTopic.includes(key) || key.includes(lowerTopic)) {
              videoData = data;
              break;
            }
          }

          if (videoData) {
            // Use predefined video
            setSuccess('✅ Lesson loaded successfully! Watch the video and answer the quiz questions.');
            setVideoUrl(videoData.videoUrl);
            setQuizData(videoData.quiz);
            setTopic('');
          } else {
            // Send to N8n for custom video generation
            const payload = {
              topic: topic.trim(),
              language: language,
              difficulty: difficulty,
              duration: duration,
              timestamp: new Date().toISOString(),
              userId: 'user-' + Math.random().toString(36).substr(2, 9),
            };

            console.log('Sending payload to N8n:', payload);
            setSuccess('🎬 Generating custom lesson... Please wait up to 60 seconds.');

            const response = await fetch(N8N_WEBHOOK_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });

            if (!response.ok) {
              const errorText = await response.text();
              console.error("N8N Error Response:", response.status, errorText);
              throw new Error(`Webhook failed with status ${response.status}`);
            }

            const result = await response.json();
            console.log('Final Result from N8n:', result);

            if (result.status === 'success' && result.videoUrl) {
              setVideoUrl(result.videoUrl);
              setQuizData(result.quizData);
              setSuccess('✅ Custom lesson generated successfully! Scroll down to watch.');
              setTopic('');
            } else {
              setError('Generation failed: The video server returned an incomplete result.');
            }
          }

        } catch (err) {
            console.error('Error:', err);
            setError(`⚠️ Failed to generate lesson. ${err.message}`);
        } finally {
            setLoading(false);
            if (!videoUrl) setTimeout(() => setSuccess(''), 6000);
        }
    };

    const handleQuizAnswer = (selectedIndex) => {
      const isCorrect = selectedIndex === quizData[currentQuizIndex].correct;
      if (isCorrect) {
        if (currentQuizIndex < quizData.length - 1) {
          setCurrentQuizIndex(currentQuizIndex + 1);
          setSuccess('✅ Correct! Moving to the next question...');
          setTimeout(() => setSuccess(''), 2000);
        } else {
          setSuccess('🎉 Quiz completed! You got all questions correct!');
        }
      } else {
        setError('❌ Incorrect answer. Try again!');
        setTimeout(() => setError(''), 2000);
      }
    };
  
    return (
        <div className="w-full bg-white/10 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl shadow-[0_35px_120px_rgba(0,0,0,0.45)] space-y-8">
            <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                    Lesson Builder
                </p>
                <h2 className="text-3xl font-semibold text-white">Generate Your Lesson</h2>
                <p className="text-white/70 max-w-xl">
                    Try topics like: "Bernoulli's Principle" or "4x4 Matrix Exponentiation"
                </p>
                <p className="text-white/50 text-sm">
                    Or enter any topic for custom AI-generated lessons
                </p>
            </div>

            {error && (
                <div className="bg-red-600/20 border border-red-600/30 rounded-xl p-4 text-red-400 text-sm">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-green-600/20 border border-green-600/30 rounded-xl p-4 text-green-400 text-sm">
                    {success}
                </div>
            )}

            <form onSubmit={handleGenerateLesson} className="space-y-8">
                <label className="flex flex-col gap-3 text-sm text-white/80">
                    <span>Topic</span>
                    <div className="relative">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="e.g., Bernoulli's Principle or 4x4 Matrix Exponentiation"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FACC15] text-xs uppercase tracking-[0.4em]">
                            AI
                        </span>
                    </div>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="text-sm text-white/80 block mb-3">Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-white/80 block mb-3">Difficulty</label>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option>Kids</option>
                            <option>School</option>
                            <option>College</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-white/80 block mb-3">Duration</label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option>30 sec</option>
                            <option>60 sec</option>
                            <option>2 min</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 rounded-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white shadow-lg shadow-[#4F46E5]/50 hover:shadow-[#6366F1]/70 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="animate-spin">⏳</span>
                            Generating...
                        </>
                    ) : (
                        'Generate Animated Lesson'
                    )}
                </button>
            </form>

            {/* Video Player and Quiz Display */}
            {videoUrl && (
                <div className="pt-8 space-y-6 border-t border-white/10">
                    <h3 className="text-2xl font-semibold text-white">Watch Your Lesson:</h3>
                    <video width="100%" controls autoPlay className="rounded-xl shadow-2xl bg-black">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Quiz Section */}
                    {quizData && quizData.length > 0 && (
                        <>
                            <h3 className="text-2xl font-semibold text-white pt-6">Quick Quiz:</h3>
                            <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 space-y-6">
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <p className="text-sm text-white/60">Question {currentQuizIndex + 1} of {quizData.length}</p>
                                  <span className="px-3 py-1 bg-[#6366F1] rounded-full text-xs font-semibold">{quizData[currentQuizIndex].type.toUpperCase()}</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#FACC15] transition-all"
                                    style={{ width: `${((currentQuizIndex + 1) / quizData.length) * 100}%` }}
                                  />
                                </div>
                              </div>

                              <h4 className="text-lg font-semibold text-white">
                                {quizData[currentQuizIndex].question}
                              </h4>

                              <div className="space-y-3">
                                {quizData[currentQuizIndex].options.map((option, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleQuizAnswer(index)}
                                    className="w-full text-left p-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#6366F1] transition text-white hover:shadow-lg"
                                  >
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/30 mr-3">
                                      {String.fromCharCode(65 + index)}
                                    </span>
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
  
export default GenerateCard; 