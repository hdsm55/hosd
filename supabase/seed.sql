-- Seed data for projects and case studies

-- Insert sample projects
INSERT INTO projects (slug, title, description, short_description, category, technologies, client_name, project_url, github_url, featured_image, gallery_images, status, start_date, end_date) VALUES
(
  'ecommerce-platform',
  'منصة تجارة إلكترونية متطورة',
  'تطوير منصة تجارة إلكترونية شاملة مع نظام إدارة متكامل، دفع آمن، وإدارة المخزون. تم تطوير الواجهة الأمامية والخلفية مع التركيز على الأداء والأمان.',
  'منصة تجارة إلكترونية شاملة مع نظام إدارة متكامل',
  'web_development',
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
  'شركة التجارة الرقمية',
  'https://example-ecommerce.com',
  'https://github.com/husam/ecommerce-platform',
  '/images/projects/ecommerce-featured.jpg',
  ARRAY['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg', '/images/projects/ecommerce-3.jpg'],
  'completed',
  '2023-01-15',
  '2023-06-30'
),
(
  'mobile-task-manager',
  'تطبيق إدارة المهام الذكي',
  'تطبيق جوال لإدارة المهام والمشاريع مع ميزات متقدمة مثل التزامن السحابي، الإشعارات الذكية، والتقارير التفصيلية. تم تطويره باستخدام React Native.',
  'تطبيق جوال لإدارة المهام مع ميزات متقدمة',
  'mobile_app',
  ARRAY['React Native', 'Firebase', 'Redux', 'Expo'],
  'شركة الإدارة الذكية',
  'https://apps.apple.com/task-manager',
  'https://github.com/husam/task-manager',
  '/images/projects/task-manager-featured.jpg',
  ARRAY['/images/projects/task-manager-1.jpg', '/images/projects/task-manager-2.jpg'],
  'completed',
  '2023-03-01',
  '2023-08-15'
),
(
  'ui-design-system',
  'نظام تصميم UI شامل',
  'تصميم وتطوير نظام تصميم شامل لشركة تقنية كبيرة، يشمل مكونات UI، دليل الألوان، والخطوط، مع التركيز على الاتساق وسهولة الاستخدام.',
  'نظام تصميم UI شامل مع مكونات قابلة لإعادة الاستخدام',
  'ui_ux_design',
  ARRAY['Figma', 'Storybook', 'React', 'TypeScript'],
  'شركة التقنية المتقدمة',
  'https://design-system.example.com',
  'https://github.com/husam/design-system',
  '/images/projects/design-system-featured.jpg',
  ARRAY['/images/projects/design-system-1.jpg', '/images/projects/design-system-2.jpg', '/images/projects/design-system-3.jpg', '/images/projects/design-system-4.jpg'],
  'completed',
  '2023-05-01',
  '2023-09-30'
),
(
  'healthcare-portal',
  'بوابة الرعاية الصحية',
  'تطوير بوابة شاملة للرعاية الصحية تسمح للمرضى بحجز المواعيد، مراجعة السجلات الطبية، والتواصل مع الأطباء. تم التركيز على الأمان والخصوصية.',
  'بوابة شاملة للرعاية الصحية مع حجز المواعيد',
  'web_development',
  ARRAY['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
  'مستشفى الرعاية المتقدمة',
  'https://healthcare-portal.com',
  null,
  '/images/projects/healthcare-featured.jpg',
  ARRAY['/images/projects/healthcare-1.jpg', '/images/projects/healthcare-2.jpg'],
  'completed',
  '2023-07-01',
  '2023-11-30'
),
(
  'ai-chatbot',
  'روبوت محادثة ذكي',
  'تطوير روبوت محادثة ذكي لخدمة العملاء باستخدام الذكاء الاصطناعي. يتضمن معالجة اللغة الطبيعية، التعلم المستمر، والتكامل مع أنظمة CRM.',
  'روبوت محادثة ذكي لخدمة العملاء',
  'consultation',
  ARRAY['Python', 'OpenAI', 'FastAPI', 'Docker', 'Redis'],
  'شركة الخدمات الرقمية',
  'https://ai-chatbot.example.com',
  'https://github.com/husam/ai-chatbot',
  '/images/projects/chatbot-featured.jpg',
  ARRAY['/images/projects/chatbot-1.jpg', '/images/projects/chatbot-2.jpg'],
  'in_progress',
  '2023-10-01',
  null
);

-- Insert case studies for the projects
INSERT INTO case_studies (project_id, problem, approach, result, challenges, solutions, metrics, lessons_learned) VALUES
(
  (SELECT id FROM projects WHERE slug = 'ecommerce-platform'),
  'كان العميل يواجه مشاكل في منصته التجارية القديمة: بطء في الأداء، واجهة مستخدم معقدة، ونظام دفع غير آمن. كانت المبيعات تتراجع بسبب هذه المشاكل.',
  'قمت بتطوير منصة جديدة من الصفر باستخدام React للواجهة الأمامية و Node.js للخلفية. ركزت على تحسين الأداء، تبسيط تجربة المستخدم، وتطبيق أعلى معايير الأمان للدفع.',
  'تحسن الأداء بنسبة 70%، زيادة المبيعات بنسبة 45%، وانخفاض معدل التخلي عن السلة بنسبة 30%. حصل المشروع على تقييم 4.8/5 من العملاء.',
  ARRAY['تكامل أنظمة الدفع المتعددة', 'تحسين أداء قاعدة البيانات', 'ضمان الأمان في المعاملات'],
  ARRAY['استخدام Redis للتخزين المؤقت', 'تطبيق معايير PCI DSS', 'تحسين استعلامات قاعدة البيانات'],
  '{"performance_improvement": "70%", "sales_increase": "45%", "cart_abandonment_reduction": "30%", "customer_rating": "4.8/5"}',
  'أهمية التخطيط المسبق للأداء والأمان. التعاون الوثيق مع العميل في مرحلة التصميم يؤدي إلى نتائج أفضل.'
),
(
  (SELECT id FROM projects WHERE slug = 'mobile-task-manager'),
  'كانت الشركة تحتاج إلى تطبيق موحد لإدارة المهام عبر فرق متعددة. التطبيقات الموجودة لم تكن تلبي احتياجاتهم الخاصة، وكان هناك مشاكل في التزامن بين الأجهزة.',
  'طورت تطبيق React Native مع نظام تزامن سحابي متقدم. أضفت ميزات مثل الإشعارات الذكية، التقارير التفصيلية، وإدارة الفرق مع صلاحيات متدرجة.',
  'زيادة إنتاجية الفرق بنسبة 60%، تقليل الوقت المطلوب لإدارة المهام بنسبة 40%، ورضا المستخدمين بنسبة 95%.',
  ARRAY['التزامن في الوقت الفعلي', 'إدارة الصلاحيات المعقدة', 'تحسين تجربة المستخدم على الأجهزة المختلفة'],
  ARRAY['استخدام Firebase Realtime Database', 'تطبيق نظام صلاحيات متدرج', 'اختبار شامل على أجهزة مختلفة'],
  '{"productivity_increase": "60%", "time_reduction": "40%", "user_satisfaction": "95%"}',
  'التزامن السحابي يتطلب تخطيط دقيق. اختبار التطبيق على أجهزة مختلفة ضروري لضمان تجربة موحدة.'
),
(
  (SELECT id FROM projects WHERE slug = 'ui-design-system'),
  'كانت الشركة تعاني من عدم الاتساق في التصميم عبر منتجاتها المختلفة. كل فريق كان يستخدم مكونات وتصاميم مختلفة، مما أثر على هوية العلامة التجارية.',
  'صممت نظام تصميم شامل يشمل جميع المكونات الأساسية، دليل الألوان، والخطوط. طورت مكتبة مكونات React قابلة لإعادة الاستخدام مع Storybook للتوثيق.',
  'تقليل وقت التطوير بنسبة 50%، تحسين الاتساق في التصميم بنسبة 90%، ورضا المطورين والمصممين بنسبة 98%.',
  ARRAY['تحديد متطلبات جميع الفرق', 'ضمان المرونة في الاستخدام', 'إنشاء توثيق شامل'],
  ARRAY['إجراء ورش عمل مع جميع الفرق', 'تطبيق نظام tokens للتصميم', 'إنشاء Storybook للتوثيق التفاعلي'],
  '{"development_time_reduction": "50%", "design_consistency": "90%", "team_satisfaction": "98%"}',
  'التواصل مع جميع الفرق في المراحل المبكرة ضروري لنجاح نظام التصميم. التوثيق التفاعلي يسهل التبني.'
),
(
  (SELECT id FROM projects WHERE slug = 'healthcare-portal'),
  'المستشفى كان يحتاج إلى نظام رقمي لتحسين تجربة المرضى وإدارة المواعيد. النظام القديم كان معقداً وغير آمن، مما أثر على رضا المرضى.',
  'طورت بوابة شاملة مع التركيز على الأمان والخصوصية. أضفت ميزات حجز المواعيد، مراجعة السجلات الطبية، والتواصل الآمن مع الأطباء.',
  'تحسين تجربة المرضى بنسبة 80%، تقليل وقت حجز المواعيد بنسبة 65%، وزيادة رضا المرضى بنسبة 85%.',
  ARRAY['ضمان أمان البيانات الطبية', 'تبسيط واجهة المستخدم للمرضى', 'التكامل مع الأنظمة الطبية الموجودة'],
  ARRAY['تطبيق معايير HIPAA', 'تصميم واجهة بسيطة وواضحة', 'استخدام APIs آمنة للتكامل'],
  '{"patient_experience_improvement": "80%", "appointment_booking_time_reduction": "65%", "patient_satisfaction": "85%"}',
  'الأمان والخصوصية في التطبيقات الطبية يتطلب عناية خاصة. تبسيط الواجهة للمرضى أمر بالغ الأهمية.'
),
(
  (SELECT id FROM projects WHERE slug = 'ai-chatbot'),
  'الشركة كانت تواجه ضغط كبير على خدمة العملاء مع زيادة عدد العملاء. كان هناك حاجة لحل ذكي لتقليل وقت الاستجابة وتحسين جودة الخدمة.',
  'أطور روبوت محادثة ذكي باستخدام الذكاء الاصطناعي المتقدم. يتضمن معالجة اللغة الطبيعية، التعلم المستمر، والتكامل مع أنظمة CRM الموجودة.',
  'تقليل وقت الاستجابة بنسبة 75%، تحسين دقة الإجابات بنسبة 85%، ورضا العملاء بنسبة 90%. المشروع لا يزال قيد التطوير.',
  ARRAY['تدريب النموذج على البيانات الخاصة بالشركة', 'التكامل مع أنظمة CRM المعقدة', 'ضمان دقة الإجابات'],
  ARRAY['استخدام تقنيات NLP متقدمة', 'تطبيق نظام التعلم المستمر', 'إنشاء قاعدة معرفة شاملة'],
  '{"response_time_reduction": "75%", "answer_accuracy": "85%", "customer_satisfaction": "90%"}',
  'الذكاء الاصطناعي يتطلب بيانات عالية الجودة للتدريب. التعلم المستمر ضروري لتحسين الأداء.'
);

