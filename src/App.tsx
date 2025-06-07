import React, { useState } from 'react';
import { Globe, Share2, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const content = {
    en: {
      title: "The Economist",
      subtitle: "Intelligence that matters",
      headline: "The global imperative",
      subheadline: "Why Japan's graduates must look beyond their borders",
      byline: "By an education consultant",
      date: "Dec 15th 2024",
      category: "Opinion",
      readTime: "6 min read",
      leadIn: "As Japan's economy transforms, its young people need skills that only international education can provide",
      article: `Japan's graduating class of 2025 faces a paradox. While global skills assessments suggest workers worldwide will need technical proficiency and digital literacy by 2030, Japan's employers will demand something different: the ability to think and operate beyond the archipelago's borders. For the country's 18-year-olds contemplating their futures, this shift represents both challenge and opportunity—one best met through education abroad.

The World Economic Forum's latest skills forecast paints a familiar picture of automation anxiety and digital transformation. Yet Japan's trajectory diverges sharply from global trends. The country's chronic labour shortage, combined with an entrepreneurial awakening and belated recognition that domestic markets cannot sustain growth, has created demand for a distinctly different skill set.

**The English ceiling**

English proficiency tops the list of must-have capabilities for Japan's future workforce—not as a nice-to-have addition, but as what one Tokyo executive describes as "an existential imperative." Japan's global competitiveness rankings consistently suffer due to language barriers, with the country placing 87th out of 111 nations in the EF English Proficiency Index. This isn't merely about vocabulary or grammar; it's about the cognitive flexibility that comes from thinking, negotiating, and creating in a second language.

Traditional English education in Japan, despite recent reforms, cannot replicate the immersive experience necessary for true fluency. "You can study English for six years in Japanese schools and still struggle to hold a basic business conversation," notes Hiroshi Mikitani, founder of Rakuten, who has long advocated for English as his company's official language.

**Beyond the salaryman**

The shift extends beyond language. Japan's post-war economic model, built on lifetime employment and hierarchical corporate structures, is crumbling under demographic pressure. The country's working-age population has shrunk by 8m since 2000, forcing companies to rethink everything from recruitment to retention. This transformation demands workers who can navigate uncertainty, collaborate across cultures, and challenge established practices.

International education naturally cultivates these traits. Students who study abroad develop what psychologists term "cognitive flexibility"—the ability to switch between different conceptual frameworks. They learn to question assumptions, a skill that proves invaluable in Japan's increasingly complex business environment.

**The startup imperative**

Tokyo's ambitions as a global startup hub add urgency to these demands. The city's venture capital ecosystem has grown sixfold since 2013, though it still lags behind Silicon Valley and London. Success requires entrepreneurs who understand global markets, not just domestic ones. "Japanese startups that think locally die locally," argues Taizo Son, a prominent venture capitalist and serial entrepreneur.

The entrepreneurial mindset—comfort with risk, tolerance for failure, and ability to pivot quickly—remains underdeveloped in Japan's educational system. Universities abroad, particularly in countries like the United States and Australia, embed these concepts into their curricula through case studies, internships, and collaborative projects.

**The human advantage**

Artificial intelligence's advancement makes human skills more valuable, not less. By 2030, machines will handle routine analytical tasks, leaving humans to focus on creativity, empathy, and complex problem-solving. Japan's ageing society makes these capabilities particularly crucial, as the country seeks to maintain productivity with fewer workers.

International education develops precisely these skills. Students learn resilience by navigating foreign bureaucracies, empathy by understanding different cultural perspectives, and leadership by building relationships across divides. These experiences prove difficult to replicate domestically.

**The innovation gap**

Japan's innovation challenges run deeper than technology. The country ranks 13th in the Global Innovation Index, held back by rigid corporate cultures and risk-averse thinking. Breaking these patterns requires exposure to different approaches to problem-solving and creativity.

Consider the experience of Satya Nadella, Microsoft's chief executive, who credits his international education with shaping his leadership philosophy. While Nadella is Indian-American rather than Japanese, his trajectory illustrates how global exposure can transform perspective and approach.

**Calculating the investment**

Studying abroad requires significant financial commitment. Tuition and living expenses for a four-year degree in the United States can exceed $200,000, a substantial sum for Japanese families facing stagnant wages. Yet the investment yields measurable returns. Japanese graduates with international degrees earn 30% more on average than their domestic counterparts, according to recruiting firm Robert Half.

More importantly, they gain access to opportunities that remain closed to others. Global companies operating in Japan—from Goldman Sachs to Google—disproportionately hire candidates with international experience. These firms offer not just higher salaries but faster career progression and greater responsibility.

**The multiplier effect**

The benefits extend beyond individual advancement. Japan's economic future depends on its ability to integrate with global supply chains, attract foreign investment, and export beyond manufacturing. This requires a workforce comfortable operating across cultures and time zones.

Countries like Singapore and South Korea have recognised this imperative, actively encouraging students to study abroad through scholarships and incentives. Japan's approach remains more cautious, though programs like the Tobitate scholarship initiative represent steps in the right direction.

**The urgency of now**

Japan's demographic clock is ticking. The country's birth rate has fallen to 1.2 children per woman, well below replacement level. By 2050, nearly 40% of the population will be over 65. This reality makes every young person's career choices consequential for the nation's future.

The skills Japan needs for 2030—English fluency, entrepreneurial thinking, cultural agility—are being developed today in classrooms from Sydney to Boston. Japanese students who seize these opportunities will return home not just as graduates but as bridges between Japan and the world.

The question for Japan's Class of 2025 is not whether these skills will matter, but whether they will possess them when opportunity calls. In an interconnected world, staying home may be the riskiest choice of all.`,
      relatedArticles: [
        "Japan's demographic challenge",
        "The future of work in Asia",
        "Global education trends",
        "Technology and language learning"
      ],
      newsletter: "Subscribe to our weekly newsletter for insights that matter"
    },
    ja: {
      title: "エコノミスト",
      subtitle: "重要な知見",
      headline: "グローバルな必要性",
      subheadline: "なぜ日本の卒業生は国境を越えて目を向けなければならないのか",
      byline: "教育コンサルタントより",
      date: "2024年12月15日",
      category: "オピニオン",
      readTime: "6分で読める",
      leadIn: "日本の経済が変革する中、若者には国際教育でのみ提供できるスキルが必要です",
      article: `2025年の日本の卒業生は逆説に直面している。世界的なスキル評価では、2030年までに世界中の労働者が技術的熟練度とデジタルリテラシーを必要とすることが示唆されているが、日本の雇用主は異なることを求めている：列島の境界を越えて考え、行動する能力である。将来を考える18歳の若者にとって、この変化は挑戦と機会の両方を表している—海外での教育によって最もよく対応できるものである。

世界経済フォーラムの最新スキル予測は、自動化への不安とデジタル変革の馴染みのある絵を描いている。しかし、日本の軌道はグローバルトレンドから大きく逸脱している。国の慢性的な労働力不足と、起業家精神の覚醒、そして国内市場だけでは成長を維持できないという遅ればせながらの認識が組み合わさって、明確に異なるスキルセットへの需要を生み出している。

**英語の天井**

英語の習熟度は、日本の将来の労働力にとって必須の能力のリストのトップに位置している—あると良い追加機能としてではなく、ある東京の経営者が「存在論的必要性」と表現するものとして。日本のグローバル競争力ランキングは言語の壁により一貫して苦しんでおり、EF英語能力指数で111カ国中87位に位置している。これは単に語彙や文法の問題ではない；第二言語で考え、交渉し、創造することから生まれる認知的柔軟性の問題である。

日本の従来の英語教育は、最近の改革にもかかわらず、真の流暢さに必要な没入体験を再現することはできない。「日本の学校で6年間英語を学んでも、基本的なビジネス会話に苦労することがある」と、長年自社の公用語として英語を提唱してきた楽天の創設者、三木谷浩史氏は指摘する。

**サラリーマンを超えて**

変化は言語を超えて広がっている。終身雇用と階層的企業構造に基づく日本の戦後経済モデルは、人口統計学的圧力の下で崩壊している。2000年以降、国の労働年齢人口は800万人減少し、企業は採用から定着まですべてを再考することを余儀なくされている。この変革は、不確実性をナビゲートし、文化を越えて協力し、確立された慣行に挑戦できる労働者を要求している。

国際教育は自然にこれらの特性を育成する。海外で学ぶ学生は、心理学者が「認知的柔軟性」と呼ぶもの—異なる概念的枠組み間を切り替える能力—を発達させる。彼らは前提を疑うことを学び、これは日本のますます複雑なビジネス環境で非常に価値のあるスキルである。

**スタートアップの必要性**

グローバルスタートアップハブとしての東京の野心は、これらの要求に緊急性を加えている。市のベンチャーキャピタルエコシステムは2013年以降6倍に成長したが、シリコンバレーやロンドンには依然として遅れをとっている。成功には、国内市場だけでなくグローバル市場を理解する起業家が必要である。「ローカルに考える日本のスタートアップはローカルで死ぬ」と、著名なベンチャーキャピタリストで連続起業家の孫泰蔵氏は主張する。

起業家精神—リスクへの快適さ、失敗への寛容、迅速なピボット能力—は日本の教育システムでは未発達のままである。特にアメリカやオーストラリアなどの国の海外の大学は、ケーススタディ、インターンシップ、協力プロジェクトを通じてこれらの概念をカリキュラムに組み込んでいる。

**人間の優位性**

人工知能の進歩は、人間のスキルをより価値のないものではなく、より価値のあるものにしている。2030年までに、機械は日常的な分析タスクを処理し、人間は創造性、共感、複雑な問題解決に集中することになる。日本の高齢化社会は、国がより少ない労働者で生産性を維持しようとする中で、これらの能力を特に重要にしている。

国際教育はまさにこれらのスキルを発達させる。学生は外国の官僚制度をナビゲートすることで回復力を学び、異なる文化的視点を理解することで共感を学び、分裂を越えて関係を築くことでリーダーシップを学ぶ。これらの経験は国内で再現することが困難である。

**イノベーションギャップ**

日本のイノベーションの課題は技術よりも深く根ざしている。国はグローバルイノベーション指数で13位にランクされており、硬直した企業文化とリスク回避的思考によって阻害されている。これらのパターンを破るには、問題解決と創造性への異なるアプローチへの露出が必要である。

マイクロソフトの最高経営責任者であるサティア・ナデラの経験を考えてみよう。彼は国際教育が自分のリーダーシップ哲学を形成したと評価している。ナデラは日本人ではなくインド系アメリカ人だが、彼の軌跡はグローバルな露出がいかに視点とアプローチを変革できるかを示している。

**投資の計算**

海外での学習には重要な財政的コミットメントが必要である。アメリカでの4年間の学位の授業料と生活費は20万ドルを超える可能性があり、賃金の停滞に直面している日本の家族にとっては相当な金額である。しかし、投資は測定可能なリターンをもたらす。リクルーティング会社ロバート・ハーフによると、国際学位を持つ日本の卒業生は、国内の同等者よりも平均30％多く稼いでいる。

さらに重要なことに、彼らは他の人には閉ざされている機会へのアクセスを得る。日本で事業を展開するグローバル企業—ゴールドマン・サックスからグーグルまで—は、国際経験を持つ候補者を不釣り合いに雇用している。これらの企業は、より高い給与だけでなく、より速いキャリア進歩とより大きな責任を提供している。

**乗数効果**

利益は個人の進歩を超えて広がっている。日本の経済的未来は、グローバルサプライチェーンとの統合、外国投資の誘致、製造業を超えた輸出の能力にかかっている。これには、文化とタイムゾーンを越えて快適に活動できる労働力が必要である。

シンガポールや韓国などの国々は、この必要性を認識し、奨学金とインセンティブを通じて学生の海外留学を積極的に奨励している。日本のアプローチはより慎重なままだが、トビタテ奨学金イニシアチブなどのプログラムは正しい方向への一歩を表している。

**今の緊急性**

日本の人口統計学的時計は刻々と時を刻んでいる。国の出生率は女性一人当たり1.2人の子供に落ち、置換レベルを大きく下回っている。2050年までに、人口の約40％が65歳を超える。この現実は、すべての若者のキャリア選択を国の未来にとって重要なものにしている。

日本が2030年に必要とするスキル—英語の流暢さ、起業家的思考、文化的敏捷性—は、シドニーからボストンまでの教室で今日開発されている。これらの機会を掴む日本の学生は、単なる卒業生としてではなく、日本と世界の間の橋として帰国するだろう。

2025年の日本のクラスにとっての問題は、これらのスキルが重要かどうかではなく、機会が訪れたときにそれらを持っているかどうかである。相互接続された世界では、家にいることが最もリスクの高い選択かもしれない。`,
      relatedArticles: [
        "日本の人口統計学的課題",
        "アジアにおける仕事の未来",
        "グローバル教育のトレンド",
        "技術と言語学習"
      ],
      newsletter: "重要な洞察のための週刊ニュースレターを購読する"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-red-600">
        <div className="bg-red-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Premium content</span>
              <span>•</span>
              <span>Global insights</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
                className="flex items-center space-x-2 hover:bg-red-700 px-3 py-1 rounded transition-colors"
              >
                <Globe size={16} />
                <span>{language === 'en' ? '日本語' : 'English'}</span>
              </button>
              <span>Subscribe</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold text-red-600 mb-1">
                {currentContent.title}
              </h1>
              <p className="text-sm text-gray-600 italic">
                {currentContent.subtitle}
              </p>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm">
              <a href="#" className="hover:text-red-600 transition-colors">World</a>
              <a href="#" className="hover:text-red-600 transition-colors">Business</a>
              <a href="#" className="hover:text-red-600 transition-colors">Finance</a>
              <a href="#" className="hover:text-red-600 transition-colors">Science</a>
              <a href="#" className="hover:text-red-600 transition-colors">Technology</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <article>
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold">
                    {currentContent.category}
                  </span>
                  <span>{currentContent.date}</span>
                  <span>•</span>
                  <span>{currentContent.readTime}</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
                  {currentContent.headline}
                </h1>
                
                <h2 className="text-xl text-gray-700 mb-6 leading-relaxed">
                  {currentContent.subheadline}
                </h2>

                <p className="text-lg text-gray-600 italic mb-6 leading-relaxed border-l-4 border-red-600 pl-4">
                  {currentContent.leadIn}
                </p>
                
                <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
                  <div className="text-sm text-gray-600">
                    {currentContent.byline} | {currentContent.date}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Share:</span>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Twitter size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Facebook size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Linkedin size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Mail size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {currentContent.article.split('\n\n').map((paragraph, index) => {
                  // Handle bold subheadings
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    const heading = paragraph.slice(2, -2);
                    return (
                      <h3 key={index} className="text-2xl font-serif font-bold mt-8 mb-4 text-gray-900">
                        {heading}
                      </h3>
                    );
                  }
                  
                  return (
                    <p key={index} className="mb-6 text-gray-800 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}

                {/* Skills Chart Integration */}
                <div className="my-12 bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                    {language === 'en' ? 'The skills landscape for 2030' : '2030年のスキル展望'}
                  </h3>
                  
                  <div className="mb-6">
                    <img 
                      src="/Core skills for 2030.jpg" 
                      alt={language === 'en' ? 'The Core Skills for 2030 - A scatter plot showing emerging skills, core skills, out-of-focus skills, and steady skills based on employer expectations and usage projections' : '2030年のコアスキル - 雇用主の期待と使用予測に基づく新興スキル、コアスキル、焦点外スキル、安定スキルを示す散布図'}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {language === 'en' 
                      ? 'This analysis of future workforce requirements reveals a striking pattern: while technical skills remain important, the most valuable capabilities for 2030 cluster around human-centric abilities. Creative thinking, analytical reasoning, and resilience top the list of core skills that employers expect to increase in both importance and usage.'
                      : 'この将来の労働力要件の分析は、印象的なパターンを明らかにしている：技術的スキルは重要であり続けるが、2030年に最も価値のある能力は人間中心の能力に集中している。創造的思考、分析的推論、回復力は、雇用主が重要性と使用の両方で増加すると予想するコアスキルのリストのトップに位置している。'
                    }
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'For Japanese students, this data underscores the article\'s central argument: international education provides unparalleled access to developing these human-centric skills. Universities abroad excel at fostering creative thinking through diverse perspectives, building analytical capabilities through rigorous academic frameworks, and developing resilience through the challenges of cross-cultural adaptation.'
                      : '日本の学生にとって、このデータは記事の中心的な論点を強調している：国際教育は、これらの人間中心のスキルを開発するための比類のないアクセスを提供する。海外の大学は、多様な視点を通じて創造的思考を育成し、厳格な学術的枠組みを通じて分析能力を構築し、異文化適応の課題を通じて回復力を発達させることに優れている。'
                    }
                  </p>
                </div>
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    {language === 'en' 
                      ? 'The writer is an education consultant who has advised Japanese students on international opportunities for over two decades.'
                      : '筆者は20年以上にわたって日本の学生に国際的な機会についてアドバイスしてきた教育コンサルタントです。'
                    }
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-3">
                    <Share2 size={20} className="text-gray-600" />
                    <span className="text-sm text-gray-600">Share this article</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Twitter size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Facebook size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Linkedin size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-gray-50 p-6 border-l-4 border-red-600">
                <h3 className="font-serif font-bold text-lg mb-3">
                  {language === 'en' ? 'Stay informed' : '情報を得る'}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {currentContent.newsletter}
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={language === 'en' ? 'Your email address' : 'メールアドレス'}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-red-600"
                  />
                  <button className="w-full bg-red-600 text-white py-2 text-sm font-semibold rounded hover:bg-red-700 transition-colors">
                    {language === 'en' ? 'Subscribe' : '購読する'}
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-gray-200">
                  {language === 'en' ? 'Related articles' : '関連記事'}
                </h3>
                <div className="space-y-4">
                  {currentContent.relatedArticles.map((article, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-sm hover:text-red-600 transition-colors leading-relaxed"
                    >
                      {article}
                    </a>
                  ))}
                </div>
              </div>

              {/* Most Popular */}
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-gray-200">
                  {language === 'en' ? 'Most popular' : '人気記事'}
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <span className="text-red-600 font-bold text-sm mt-1">{item}</span>
                      <a href="#" className="text-sm hover:text-red-600 transition-colors leading-relaxed">
                        {language === 'en' 
                          ? `Sample article title ${item} about global economics and policy`
                          : `グローバル経済と政策に関するサンプル記事タイトル ${item}`
                        }
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-serif font-bold text-xl text-red-400 mb-4">
                {currentContent.title}
              </h4>
              <p className="text-sm text-gray-400">
                {language === 'en' 
                  ? 'Authoritative global news and analysis'
                  : '権威あるグローバルニュースと分析'
                }
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">
                {language === 'en' ? 'Sections' : 'セクション'}
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">World</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">
                {language === 'en' ? 'Services' : 'サービス'}
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Subscribe' : '購読'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Digital edition' : 'デジタル版'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Mobile apps' : 'モバイルアプリ'}
                </a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">
                {language === 'en' ? 'Follow us' : 'フォロー'}
              </h5>
              <div className="flex space-x-3">
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
                  <Facebook size={16} />
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 The Economist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;