-- ============================================================
-- VietPoint Insurance & Tax — SAMPLE DATA SEED
-- Run AFTER supabase-schema.sql in Supabase Dashboard > SQL Editor
-- Safe to re-run: all inserts use ON CONFLICT DO UPDATE
-- ============================================================

-- ============================================================
-- 1. PAGE CONTENT — page: 'global'  (Footer / Contact)
-- ============================================================
insert into page_content (page, section, field, value_en, value_vi) values
  ('global','contact','phone',   '(678) 825-3737',               '(678) 825-3737'),
  ('global','contact','fax',     '(678) 825-3737',               '(678) 825-3737'),
  ('global','contact','address', '1424 N Brown Rd #450,'||chr(10)||'Lawrenceville, GA 30043',
                                  '1424 N Brown Rd #450,'||chr(10)||'Lawrenceville, GA 30043'),
  ('global','hours','weekdays',  'Sunday – Thursday: 9 AM – 7 PM',  'Chủ Nhật – Thứ Năm: 9 SA – 7 CH'),
  ('global','hours','weekend',   'Friday & Saturday: Closed',         'Thứ Sáu & Thứ Bảy: Đóng cửa'),
  ('global','social','facebook',  'https://www.facebook.com/profile.php?id=61589138322277',
                                   'https://www.facebook.com/profile.php?id=61589138322277'),
  ('global','social','instagram', 'https://www.instagram.com/vietpointinsurance',
                                   'https://www.instagram.com/vietpointinsurance'),
  ('global','social','twitter',   '#', '#'),
  ('global','social','youtube',   '#', '#')
on conflict (page, section, field) do update
  set value_en = excluded.value_en, value_vi = excluded.value_vi, updated_at = now();

-- ============================================================
-- 2. PAGE CONTENT — page: 'home'
-- ============================================================
insert into page_content (page, section, field, value_en, value_vi) values
  -- Hero
  ('home','hero','tagline',      'A Decade of Support',
                                  'Một Thập Kỷ Đồng Hành'),
  ('home','hero','title',        'Building Value for Living Fully',
                                  'Xây Dựng Giá Trị Để Sống Trọn Vẹn'),
  ('home','hero','description',  'The trusted choice of over 20,000 Vietnamese families across 50 U.S. States',
                                  'Lựa chọn tin cậy của hơn 20.000 gia đình người Việt trên 50 tiểu bang Hoa Kỳ'),
  ('home','hero','image',        'https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp',
                                  'https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp'),
  ('home','hero','video_url',    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                                  'https://www.youtube.com/embed/dQw4w9WgXcQ'),
  ('home','hero','stat1_value',  '20,000+',  '20,000+'),
  ('home','hero','stat1_label',  'Families Protected', 'Gia Đình Được Bảo Vệ'),
  ('home','hero','stat2_value',  '50',        '50'),
  ('home','hero','stat2_label',  'U.S. States', 'Tiểu Bang Hoa Kỳ'),
  ('home','hero','stat3_value',  '10+',       '10+'),
  ('home','hero','stat3_label',  'Years Trusted', 'Năm Kinh Nghiệm'),
  -- Stats section
  ('home','stats','title',       'Why Choose VietPoint Insurance & Tax?',
                                  'Tại Sao Chọn VietPoint Insurance & Tax?'),
  ('home','stats','stat1_value', '10',  '10'),
  ('home','stats','stat1_suffix','+',   '+'),
  ('home','stats','stat1_label', 'ESTABLISH', 'NĂM THÀNH LẬP'),
  ('home','stats','stat2_value', '20',  '20'),
  ('home','stats','stat2_suffix','K+',  'K+'),
  ('home','stats','stat2_label', 'CLIENT', 'KHÁCH HÀNG'),
  ('home','stats','stat3_value', '50',  '50'),
  ('home','stats','stat3_suffix','',    ''),
  ('home','stats','stat3_label', 'STATE LICENSED', 'TIỂU BANG'),
  ('home','stats','stat4_value', '24',  '24'),
  ('home','stats','stat4_suffix','/7',  '/7'),
  ('home','stats','stat4_label', 'SUPPORT', 'HỖ TRỢ'),
  -- Process section
  ('home','process','title',    'Insurance Participation Process',
                                 'Quy Trình Tham Gia Bảo Hiểm'),
  ('home','process','cta_text', 'Get Free Quote', 'Nhận Báo Giá Miễn Phí'),
  -- Testimonials
  ('home','testimonials','title','What Our Clients Say About Us',
                                  'Khách Hàng Nói Gì Về Chúng Tôi')
on conflict (page, section, field) do update
  set value_en = excluded.value_en, value_vi = excluded.value_vi, updated_at = now();

-- ============================================================
-- 3. PAGE CONTENT — page: 'about'
-- ============================================================
insert into page_content (page, section, field, value_en, value_vi) values
  -- Story
  ('about','story','intro_text',
   'Welcome to VietPoint Insurance & Tax — a trusted financial partner dedicated to serving the Vietnamese-American community across all 50 U.S. States. Founded over a decade ago, we have helped more than 20,000 families plan, protect, and prosper.',
   'Chào mừng đến với VietPoint Insurance & Tax — đối tác tài chính uy tín chuyên phục vụ cộng đồng người Việt tại Hoa Kỳ trên 50 tiểu bang. Được thành lập hơn một thập kỷ, chúng tôi đã giúp hơn 20.000 gia đình lập kế hoạch, bảo vệ và phát triển tài sản.'),
  ('about','story','brand_text',
   'VietPoint was born from a simple belief: every Vietnamese family deserves access to quality financial protection — in their own language and culture. We bridge the gap between complex insurance products and real family needs, building trust one policy at a time.',
   'VietPoint ra đời từ niềm tin đơn giản: mỗi gia đình người Việt đều xứng đáng được tiếp cận với sự bảo vệ tài chính chất lượng — bằng ngôn ngữ và văn hóa của chính họ. Chúng tôi kết nối giữa các sản phẩm bảo hiểm phức tạp và nhu cầu thực tế của gia đình, xây dựng niềm tin từng hợp đồng một.'),
  -- Mission & Vision
  ('about','mission','mission_text',
   'To empower Vietnamese-American families with comprehensive life insurance and tax planning solutions — delivered with integrity, transparency, and genuine care.',
   'Trao quyền cho các gia đình người Mỹ gốc Việt với các giải pháp bảo hiểm nhân thọ và lập kế hoạch thuế toàn diện — được cung cấp với sự chính trực, minh bạch và quan tâm thực sự.'),
  ('about','mission','vision_text',
   'To become the #1 most trusted insurance and tax advisory firm in the Vietnamese-American community, present in every state and known for exceptional service.',
   'Trở thành công ty tư vấn bảo hiểm và thuế được tin cậy hàng đầu trong cộng đồng người Mỹ gốc Việt, có mặt ở mọi tiểu bang và được biết đến với dịch vụ xuất sắc.'),
  -- What We Do
  ('about','what_we_do','subtitle',
   'VietPoint Insurance & Tax provides diverse life insurance programs designed to meet all your needs. We focus on three main benefits: Protection, Savings, and Tax-free Retirement.',
   'VietPoint Insurance & Tax cung cấp các chương trình bảo hiểm nhân thọ đa dạng đáp ứng mọi nhu cầu của bạn. Chúng tôi tập trung vào ba quyền lợi chính: Bảo vệ, Tiết kiệm và Hưu trí miễn thuế.'),
  -- CTA
  ('about','cta','title',       'Ready to Secure Your Family''s Future?',
                                 'Sẵn Sàng Bảo Vệ Tương Lai Gia Đình Bạn?'),
  ('about','cta','description', 'Contact us today for a free, no-obligation consultation.',
                                 'Liên hệ chúng tôi ngay hôm nay để được tư vấn miễn phí, không ràng buộc.'),
  ('about','cta','button_text', 'Contact Us Now', 'Liên Hệ Ngay'),
  -- Why Us (JSON array)
  ('about','why_us','data',
   '[{"title":"Deep Community Roots","desc":"Over a decade serving the Vietnamese-American community with cultural understanding and language fluency."},{"title":"Licensed in 50 States","desc":"Our agents are fully licensed and regulated, giving you peace of mind and legal protection."},{"title":"Personalized Approach","desc":"No one-size-fits-all. Every plan is customized to your unique family situation and financial goals."},{"title":"Tax-Smart Planning","desc":"We integrate insurance with tax strategy to maximize your long-term wealth and minimize liabilities."},{"title":"Bilingual Service","desc":"All consultations and documents available in both English and Vietnamese for your comfort."},{"title":"Post-Sale Support","desc":"We stay with you after signing — claims assistance, policy reviews, and ongoing guidance included."}]',
   '[{"title":"Gắn Kết Cộng Đồng","desc":"Hơn một thập kỷ phục vụ cộng đồng người Mỹ gốc Việt với sự am hiểu văn hóa và thông thạo ngôn ngữ."},{"title":"Cấp Phép 50 Tiểu Bang","desc":"Các đại lý của chúng tôi được cấp phép và quản lý đầy đủ, mang lại sự an tâm và bảo vệ pháp lý cho bạn."},{"title":"Tiếp Cận Cá Nhân Hóa","desc":"Không có giải pháp chung cho tất cả. Mỗi kế hoạch được tùy chỉnh theo hoàn cảnh gia đình và mục tiêu tài chính riêng của bạn."},{"title":"Lập Kế Hoạch Thuế Thông Minh","desc":"Chúng tôi tích hợp bảo hiểm với chiến lược thuế để tối đa hóa tài sản dài hạn và giảm thiểu trách nhiệm thuế."},{"title":"Dịch Vụ Song Ngữ","desc":"Tất cả tư vấn và tài liệu có sẵn bằng cả tiếng Anh và tiếng Việt để bạn thoải mái."},{"title":"Hỗ Trợ Sau Bán Hàng","desc":"Chúng tôi đồng hành cùng bạn sau khi ký kết — hỗ trợ giải quyết bồi thường, xem xét hợp đồng và hướng dẫn liên tục."}]'),
  -- Team (newline-separated names)
  ('about','team','agents',
   'Hung Huynh'||chr(10)||'Linh Nguyen'||chr(10)||'Kevin Tran'||chr(10)||'Mia Pham'||chr(10)||'David Le'||chr(10)||'Anna Vo',
   'Hung Huynh'||chr(10)||'Linh Nguyen'||chr(10)||'Kevin Tran'||chr(10)||'Mia Pham'||chr(10)||'David Le'||chr(10)||'Anna Vo'),
  ('about','team','ambassadors',
   'Jenny Ngo'||chr(10)||'Chris Bui'||chr(10)||'Sophie Lam'||chr(10)||'Tony Hoang',
   'Jenny Ngo'||chr(10)||'Chris Bui'||chr(10)||'Sophie Lam'||chr(10)||'Tony Hoang')
on conflict (page, section, field) do update
  set value_en = excluded.value_en, value_vi = excluded.value_vi, updated_at = now();

-- ============================================================
-- 4. PAGE CONTENT — page: 'recruitment'
-- ============================================================
insert into page_content (page, section, field, value_en, value_vi) values
  ('recruitment','hero','title',
   'Join Our Team',
   'Gia Nhập Đội Ngũ Của Chúng Tôi'),
  ('recruitment','hero','subtitle',
   'Build a meaningful career helping Vietnamese-American families protect their health and financial future.',
   'Xây dựng sự nghiệp ý nghĩa giúp các gia đình người Việt bảo vệ sức khỏe và tương lai tài chính của họ.'),
  ('recruitment','cta','title',
   'Ready to Make a Difference?',
   'Sẵn Sàng Tạo Sự Khác Biệt?'),
  ('recruitment','cta','subtitle',
   'Send your resume and a brief message about why you want to join our team.',
   'Gửi hồ sơ và lý do bạn muốn gia nhập đội ngũ của chúng tôi.'),
  -- Positions JSON
  ('recruitment','positions','data',
   '[{"title":"Licensed Insurance Agent","type":"Full-time / Part-time","location":"Remote (Georgia preferred)","desc":"Join our team of elite agents serving the Vietnamese-American community. We provide full training, licensing support, and an established client pipeline."},{"title":"Insurance Consultant (Vietnamese Speaker)","type":"Full-time","location":"Lawrenceville, GA","desc":"Work directly with Vietnamese clients to assess their insurance needs, present suitable policies, and build long-term financial relationships."},{"title":"Client Success Associate","type":"Part-time","location":"Remote","desc":"Support existing policyholders with claims, policy questions, renewals, and ongoing communication. Bilingual (Vietnamese/English) required."}]',
   '[{"title":"Đại Lý Bảo Hiểm Có Giấy Phép","type":"Toàn thời gian / Bán thời gian","location":"Remote (ưu tiên Georgia)","desc":"Gia nhập đội ngũ đại lý xuất sắc của chúng tôi phục vụ cộng đồng người Mỹ gốc Việt. Chúng tôi cung cấp đào tạo đầy đủ, hỗ trợ cấp phép và đường dẫn khách hàng đã được thiết lập."},{"title":"Tư Vấn Viên Bảo Hiểm (Nói Tiếng Việt)","type":"Toàn thời gian","location":"Lawrenceville, GA","desc":"Làm việc trực tiếp với khách hàng Việt để đánh giá nhu cầu bảo hiểm, giới thiệu chính sách phù hợp và xây dựng mối quan hệ tài chính lâu dài."},{"title":"Chuyên Viên Chăm Sóc Khách Hàng","type":"Bán thời gian","location":"Remote","desc":"Hỗ trợ những người được bảo hiểm hiện tại với các khiếu nại, câu hỏi về hợp đồng, gia hạn và liên lạc liên tục. Yêu cầu song ngữ Việt/Anh."}]'),
  -- Benefits JSON
  ('recruitment','benefits','data',
   '["Uncapped commission income","Flexible work schedule","Full training & licensing sponsorship","Supportive team environment","Leadership advancement opportunities","Serving a meaningful mission for our community"]',
   '["Thu nhập hoa hồng không giới hạn","Lịch làm việc linh hoạt","Đào tạo đầy đủ & tài trợ cấp phép","Môi trường nhóm hỗ trợ","Cơ hội thăng tiến lãnh đạo","Phục vụ sứ mệnh ý nghĩa cho cộng đồng của chúng tôi"]')
on conflict (page, section, field) do update
  set value_en = excluded.value_en, value_vi = excluded.value_vi, updated_at = now();

-- ============================================================
-- 5. PAGE CONTENT — page: 'verify_consultant'
-- ============================================================
insert into page_content (page, section, field, value_en, value_vi) values
  ('verify_consultant','hero','title',
   'Verify Official Consultant',
   'Xác Minh Tư Vấn Viên Chính Thức'),
  ('verify_consultant','hero','subtitle',
   'Protect yourself from fraud. Verify that your agent is an officially licensed VietPoint Insurance & Tax consultant before sharing any personal information.',
   'Bảo vệ bản thân khỏi gian lận. Xác minh rằng đại lý của bạn là tư vấn viên được VietPoint cấp phép chính thức trước khi chia sẻ thông tin cá nhân.'),
  ('verify_consultant','hero','form_label',
   'Agent License ID or Full Name',
   'Mã Giấy Phép hoặc Họ Tên Đầy Đủ'),
  ('verify_consultant','hero','form_placeholder',
   'e.g. TS-12345 or Hung Huynh',
   'vd. TS-12345 hoặc Hung Huynh')
on conflict (page, section, field) do update
  set value_en = excluded.value_en, value_vi = excluded.value_vi, updated_at = now();

-- ============================================================
-- 6. TESTIMONIALS
-- ============================================================
truncate table testimonials restart identity cascade;
insert into testimonials (name, avatar, content_en, content_vi, rating, active) values
  ('Linh Nguyen', 'https://i.pravatar.cc/80?img=47',
   'VietPoint helped my family get the right insurance coverage at an affordable price. Their team speaks Vietnamese fluently and explains everything clearly. I feel truly protected.',
   'VietPoint đã giúp gia đình tôi có được bảo hiểm phù hợp với giá cả phải chăng. Nhóm của họ nói tiếng Việt thành thạo và giải thích mọi thứ rõ ràng. Tôi cảm thấy thực sự được bảo vệ.',
   5, true),
  ('David Tran', 'https://i.pravatar.cc/80?img=12',
   'I have been a client for 5 years and have always received excellent service. When I had to file a claim, VietPoint guided me through every step without any hassle.',
   'Tôi đã là khách hàng trong 5 năm và luôn nhận được dịch vụ xuất sắc. Khi tôi phải nộp yêu cầu bồi thường, VietPoint đã hướng dẫn tôi từng bước mà không có bất kỳ rắc rối nào.',
   5, true),
  ('Huong Pham', 'https://i.pravatar.cc/80?img=32',
   'As a single mom, financial security is everything to me. VietPoint designed a plan that fits my budget and gives me peace of mind knowing my children are covered.',
   'Là một người mẹ đơn thân, an ninh tài chính là tất cả với tôi. VietPoint đã thiết kế một kế hoạch phù hợp với ngân sách của tôi và mang lại cho tôi sự an tâm khi biết các con tôi được bảo vệ.',
   5, true),
  ('Minh Le', 'https://i.pravatar.cc/80?img=68',
   'The IUL plan they set up for me is amazing — my money grows tax-free and I have life coverage. I recommend VietPoint to all my friends in the Vietnamese community.',
   'Kế hoạch IUL mà họ thiết lập cho tôi thật tuyệt vời — tiền của tôi tăng trưởng miễn thuế và tôi có bảo hiểm nhân thọ. Tôi giới thiệu VietPoint cho tất cả bạn bè trong cộng đồng người Việt.',
   5, true),
  ('Thanh Vo', 'https://i.pravatar.cc/80?img=55',
   'Switching from my old insurance to VietPoint was one of the best financial decisions I have made. Better coverage, lower premium, and a team that truly cares.',
   'Chuyển từ bảo hiểm cũ sang VietPoint là một trong những quyết định tài chính tốt nhất tôi từng đưa ra. Bảo hiểm tốt hơn, phí thấp hơn và một đội nhóm thực sự quan tâm.',
   5, true),
  ('Kim Bui', 'https://i.pravatar.cc/80?img=9',
   'VietPoint helped me understand the tax benefits of my life insurance policy. Now I save thousands of dollars every year. Their bilingual service is outstanding.',
   'VietPoint đã giúp tôi hiểu lợi ích thuế của hợp đồng bảo hiểm nhân thọ. Bây giờ tôi tiết kiệm hàng nghìn đô la mỗi năm. Dịch vụ song ngữ của họ thật xuất sắc.',
   5, true);

-- ============================================================
-- 7. BLOG POSTS (actual VietPoint posts)
-- ============================================================
truncate table blog_posts restart identity cascade;
insert into blog_posts (title_en, title_vi, excerpt_en, excerpt_vi, content_en, content_vi, image, category, published, created_at) values
  ('Is National Life Group Legit? An Honest Review for 2026',
   'National Life Group Có Uy Tín Không? Đánh Giá Thật Sự 2026',
   'If you''re researching life insurance in the United States — particularly IUL (Indexed Universal Life) — you''ve likely come across National Life Group.',
   'Nếu bạn đang nghiên cứu bảo hiểm nhân thọ tại Hoa Kỳ — đặc biệt là IUL — bạn chắc chắn đã nghe đến National Life Group.',
   '<p>If you''re researching life insurance in the United States — particularly IUL (Indexed Universal Life) — you''ve likely come across National Life Group. In this honest review, we break down their products, financial strength, and suitability for the Vietnamese-American community.</p>',
   '<p>Nếu bạn đang nghiên cứu bảo hiểm nhân thọ tại Hoa Kỳ — đặc biệt là IUL — bạn chắc chắn đã nghe đến National Life Group. Trong bài đánh giá trung thực này, chúng tôi phân tích các sản phẩm, sức mạnh tài chính và mức độ phù hợp của họ với cộng đồng người Việt.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2026/04/National-Life-Group-Co-Uy-Tin-Khong-768x460.png',
   'Featured post', true, '2026-04-16'),

  ('Top 5 Life Insurance Agencies for Vietnamese in the USA [2026 Update]',
   'Top 5 Công Ty Bảo Hiểm Nhân Thọ Cho Người Việt tại Mỹ [Cập Nhật 2026]',
   'When searching for a life insurance agency for the Vietnamese community in the U.S., the most critical factors are trust, language support, and experience.',
   'Khi tìm kiếm công ty bảo hiểm nhân thọ cho cộng đồng người Việt tại Mỹ, các yếu tố quan trọng nhất là sự tin cậy, hỗ trợ ngôn ngữ và kinh nghiệm.',
   '<p>When searching for a life insurance agency for the Vietnamese community in the U.S., the most critical factors are trust, language support, and experience. Here are the top 5 agencies serving Vietnamese families in 2026.</p>',
   '<p>Khi tìm kiếm công ty bảo hiểm nhân thọ cho cộng đồng người Việt tại Mỹ, các yếu tố quan trọng nhất là sự tin cậy, hỗ trợ ngôn ngữ và kinh nghiệm. Đây là top 5 công ty đang phục vụ gia đình người Việt năm 2026.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2026/04/Top-5-Life-Insurance-Agencies-Empowering-the-Vietnamese-Community-in-the-USA-768x432.jpg',
   'Insurance Knowledge', true, '2026-04-15'),

  ('NOTICE OF ADJUSTED DRAWING DATE',
   'THÔNG BÁO ĐIỀU CHỈNH NGÀY RÚT THĂM',
   'Program: "Win a Round-Trip U.S.–Vietnam Ticket for Lunar New Year 2027". Please read carefully for updated drawing date information.',
   'Chương trình: "Trúng Vé Khứ Hồi Mỹ–Việt Tết Nguyên Đán 2027". Vui lòng đọc kỹ thông tin ngày rút thăm đã được cập nhật.',
   '<p>Program: "Win a Round-Trip U.S.–Vietnam Ticket for Lunar New Year 2027". Organizer: VietPoint Insurance & Tax LLC. Please read carefully for updated drawing date information.</p>',
   '<p>Chương trình: "Trúng Vé Khứ Hồi Mỹ–Việt Tết Nguyên Đán 2027". Đơn vị tổ chức: VietPoint Insurance & Tax LLC. Vui lòng đọc kỹ thông tin về ngày rút thăm đã được điều chỉnh.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/10/Thong-bao-dieu-chinh-768x636.jpg',
   'Event', true, '2025-10-14'),

  ('Real Case Study: Life Insurance Cancer Payout of $54,000',
   'Case Study Thực Tế: Bảo Hiểm Nhân Thọ Chi Trả Ung Thư $54,000',
   'Real Case Study: How the Life Insurance Claim Process Worked (with IUL vs Term Life Insurance) — a complete guide for policyholders.',
   'Case Study Thực Tế: Quy Trình Bồi Thường Bảo Hiểm Nhân Thọ Diễn Ra Như Thế Nào (IUL vs Term Life) — hướng dẫn đầy đủ cho người được bảo hiểm.',
   '<p>Real Case Study: How the Life Insurance Claim Process Worked (with IUL vs Term Life Insurance) — a complete guide for policyholders facing a critical illness diagnosis.</p>',
   '<p>Case Study Thực Tế: Quy Trình Bồi Thường Bảo Hiểm Nhân Thọ Diễn Ra Như Thế Nào (IUL vs Term Life) — hướng dẫn đầy đủ cho người được bảo hiểm khi đối mặt với chẩn đoán bệnh hiểm nghèo.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/10/ANH-SON_THUMBNAIL-YOUTUBE-09-768x432.png',
   'Customer stories', true, '2025-10-13'),

  ('Review VietPoint Insurance & Tax: Case Study Life Insurance Payout $323,195',
   'Đánh Giá VietPoint Insurance & Tax: Case Study Bồi Thường $323,195',
   'From Karaoke Shortness of Breath to a Cancer Diagnosis — how IUL living benefits changed one family''s life.',
   'Từ Hụt Hơi Khi Hát Karaoke đến Chẩn Đoán Ung Thư — cách quyền lợi sống IUL thay đổi cuộc đời một gia đình.',
   '<p>From Karaoke Shortness of Breath to a Cancer Diagnosis — Life insurance bồi thường and how IUL living benefits changed one family''s life. A real VietPoint case study.</p>',
   '<p>Từ Hụt Hơi Khi Hát Karaoke đến Chẩn Đoán Ung Thư — Bảo hiểm nhân thọ bồi thường và cách quyền lợi sống IUL thay đổi cuộc đời một gia đình. Một case study thực tế từ VietPoint.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/10/CHI-TIEN_THUMBNAIL-YOUTUBE-02-768x432.png',
   'Customer stories', true, '2025-10-12'),

  ('National Life Group''s IUL Premium Payment Policy',
   'Chính Sách Đóng Phí Bảo Hiểm IUL của National Life Group',
   'Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community. Understanding the payment policy is crucial.',
   'Bảo hiểm Indexed Universal Life (IUL) ngày càng thu hút sự quan tâm của cộng đồng người Việt. Hiểu rõ chính sách thanh toán là điều cần thiết.',
   '<p>Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community in the United States. Understanding the premium payment policy of National Life Group is crucial for making informed decisions.</p>',
   '<p>Bảo hiểm Indexed Universal Life (IUL) ngày càng thu hút sự quan tâm của cộng đồng người Việt tại Hoa Kỳ. Hiểu rõ chính sách đóng phí của National Life Group là điều cần thiết để đưa ra quyết định sáng suốt.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/chinh-sach-dong-phi-bao-hiem-iul-national-life-group-iul-premium-payment-policy-thumbnails-768x512.jpg',
   'Featured post', true, '2025-05-01'),

  ('How much does life insurance cost in the US? A 2025 guide for Vietnamese families',
   'Bảo Hiểm Nhân Thọ Bao Nhiêu Tiền Tại Mỹ? Hướng Dẫn 2025 cho Gia Đình Việt',
   'For the Vietnamese community in the US, understanding life insurance is not just about protecting your loved ones — it''s about securing your future.',
   'Đối với cộng đồng người Việt tại Mỹ, hiểu bảo hiểm nhân thọ không chỉ là bảo vệ người thân — mà còn là bảo đảm tương lai của bạn.',
   '<p>For the Vietnamese community in the US, understanding life insurance is not just about protecting your loved ones — it''s about securing your future. This 2025 guide covers premiums, coverage types, and what Vietnamese families should know before buying.</p>',
   '<p>Đối với cộng đồng người Việt tại Mỹ, hiểu bảo hiểm nhân thọ không chỉ là bảo vệ người thân — mà còn là bảo đảm tương lai của bạn. Hướng dẫn 2025 này bao gồm phí bảo hiểm, các loại bảo hiểm và những gì gia đình Việt cần biết trước khi mua.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/bao-hiem-nhan-tho-bao-nhieu-tien-tai-my-how-much-does-life-insurance-cost-in-the-us-thumbnail-768x512.jpg',
   'Featured post', true, '2025-04-20'),

  ('IUL Insurance Returns: High or Low?',
   'Lợi Nhuận Bảo Hiểm IUL: Cao Hay Thấp?',
   'Indexed Universal Life (IUL) is a unique type of permanent life insurance. Beyond protection, it offers a cash value investment component.',
   'Indexed Universal Life (IUL) là loại bảo hiểm nhân thọ vĩnh viễn độc đáo. Ngoài bảo vệ, nó còn cung cấp thành phần đầu tư giá trị tiền mặt.',
   '<p>Indexed Universal Life (IUL) is a unique type of permanent life insurance. Beyond protection, it offers a cash value investment component linked to a market index. But how high or low are the actual returns? We break down the numbers.</p>',
   '<p>Indexed Universal Life (IUL) là loại bảo hiểm nhân thọ vĩnh viễn độc đáo. Ngoài bảo vệ, nó còn cung cấp thành phần đầu tư giá trị tiền mặt liên kết với chỉ số thị trường. Nhưng lợi nhuận thực tế cao hay thấp? Chúng tôi phân tích các con số.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/loi-nhuan-bao-hiem-iul-insurance-returns-thumbnail-768x512.jpg',
   'Customer stories', true, '2025-04-25'),

  ('"Decoding" the US Single Tax and How Singles Can Optimize Their Taxes',
   '"Giải Mã" Thuế Độc Thân Mỹ và Cách Người Độc Thân Tối Ưu Thuế',
   'What is the "single tax"? Does it exist in the US tax system? This article clarifies the concept and optimization strategies for Vietnamese singles in America.',
   '"Thuế độc thân" là gì? Nó có tồn tại trong hệ thống thuế Mỹ không? Bài viết này làm rõ khái niệm và chiến lược tối ưu thuế cho người Việt độc thân tại Mỹ.',
   '<p>What is the "single tax"? Does it exist in the US tax system? This article will clarify the concept and explain how Vietnamese singles in America can optimize their tax situation.</p>',
   '<p>"Thuế độc thân" là gì? Nó có tồn tại trong hệ thống thuế Mỹ không? Bài viết này sẽ làm rõ khái niệm và giải thích cách người Việt độc thân tại Mỹ có thể tối ưu hóa tình trạng thuế của mình.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/thue-doc-than-my-us-single-tax-thumbnail-768x512.jpg',
   'Health - Life', true, '2025-04-22'),

  ('S&P 500 Index: Growth, Volatility, and Investment Insights',
   'Chỉ Số S&P 500: Tăng Trưởng, Biến Động và Kiến Thức Đầu Tư',
   'The S&P 500 Index is a key benchmark that reflects the overall health of the U.S. economy and its impact on IUL policies.',
   'Chỉ số S&P 500 là thước đo chính phản ánh sức khỏe tổng thể của nền kinh tế Mỹ và tác động của nó đến các hợp đồng IUL.',
   '<p>The S&P 500 Index (Standard & Poor''s 500) is a key benchmark that reflects the overall health and trends of the U.S. stock market. Understanding it is essential for IUL policyholders whose cash value growth is linked to this index.</p>',
   '<p>Chỉ số S&P 500 (Standard & Poor''s 500) là thước đo chính phản ánh xu hướng và sức khỏe tổng thể của thị trường chứng khoán Mỹ. Hiểu nó là điều cần thiết cho người có hợp đồng IUL khi tăng trưởng giá trị tiền mặt liên kết với chỉ số này.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg',
   'Insurance Knowledge', true, '2025-04-17'),

  ('U.S. Estate Tax 2025: A Comprehensive Guide',
   'Thuế Thừa Kế Mỹ 2025: Hướng Dẫn Toàn Diện',
   'Understanding the U.S. estate tax system is critically important for the Vietnamese community planning wealth transfer.',
   'Hiểu hệ thống thuế thừa kế Mỹ là vô cùng quan trọng đối với cộng đồng người Việt đang lên kế hoạch chuyển giao tài sản.',
   '<p>Understanding the U.S. estate tax system is critically important for anyone, especially the Vietnamese community planning wealth transfer to the next generation. This comprehensive guide covers exemptions, rates, and planning strategies.</p>',
   '<p>Hiểu hệ thống thuế thừa kế Mỹ là vô cùng quan trọng với bất kỳ ai, đặc biệt là cộng đồng người Việt đang lên kế hoạch chuyển giao tài sản cho thế hệ tiếp theo. Hướng dẫn toàn diện này bao gồm các miễn trừ, thuế suất và chiến lược lập kế hoạch.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/thue-thua-ke-my-us-estate-tax-2025-thumbnails-768x512.jpg',
   'Investment, Saving & Retire', true, '2025-04-14'),

  ('US Tax Filing 2025: A Detailed Guide for Vietnamese (F-1, H-1B, Green Card)',
   'Khai Thuế Mỹ 2025: Hướng Dẫn Chi Tiết cho Người Việt (F-1, H-1B, Thẻ Xanh)',
   'A comprehensive, step-by-step guide to filing US taxes for Vietnamese immigrants — covering F-1 students, H-1B workers, and Green Card holders.',
   'Hướng dẫn toàn diện từng bước khai thuế Mỹ cho người nhập cư Việt — bao gồm sinh viên F-1, người lao động H-1B và chủ thẻ xanh.',
   '<p>A comprehensive, step-by-step guide to filing US taxes for Vietnamese immigrants — covering F-1 students, H-1B workers, and Green Card holders. Navigate the complexities of the US tax system with confidence.</p>',
   '<p>Hướng dẫn toàn diện từng bước khai thuế Mỹ cho người nhập cư Việt — bao gồm sinh viên F-1, người lao động H-1B và chủ thẻ xanh. Tự tin điều hướng sự phức tạp của hệ thống thuế Mỹ.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/khai-thue-my-us-tax-filling-thumbnail-768x512.jpg',
   'Investment, Saving & Retire', true, '2025-04-12'),

  ('Allianz Insurance Company: Is It Truly Trustworthy?',
   'Công Ty Bảo Hiểm Allianz Có Uy Tín Không?',
   'As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz right for Vietnamese-American policyholders?',
   'Là tập đoàn tài chính toàn cầu, Allianz có thương hiệu mạnh và lịch sử lâu dài. Nhưng Allianz có phù hợp với người Mỹ gốc Việt không?',
   '<p>As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz right for Vietnamese families in the U.S.? We provide an honest assessment of their products and customer service for the Vietnamese-American community.</p>',
   '<p>Là tập đoàn tài chính toàn cầu, Allianz có thương hiệu mạnh và lịch sử lâu dài. Nhưng Allianz có phù hợp với gia đình người Việt tại Mỹ không? Chúng tôi cung cấp đánh giá trung thực về sản phẩm và dịch vụ khách hàng của họ.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/05/cong-ty-bao-hiem-allianz-co-uy-tin-khong-is-allianz-reputable-thumbnail-1-768x512.jpg',
   'Featured post', true, '2025-04-10'),

  ('AIG Term Life Insurance Review 2025',
   'Đánh Giá Bảo Hiểm Term Life AIG 2025',
   'AIG is one of America''s largest insurers. Is their Term Life product right for the Vietnamese community? An honest, detailed review.',
   'AIG là một trong những công ty bảo hiểm lớn nhất Mỹ. Sản phẩm Term Life của họ có phù hợp với cộng đồng người Việt không? Đánh giá trung thực và chi tiết.',
   '<p>AIG is one of America''s largest insurers. Is their Term Life product right for the Vietnamese community? We provide an honest, detailed review of AIG Term Life insurance for Vietnamese-American families in 2025.</p>',
   '<p>AIG là một trong những công ty bảo hiểm lớn nhất Mỹ. Sản phẩm Term Life của họ có phù hợp với cộng đồng người Việt không? Chúng tôi cung cấp đánh giá trung thực và chi tiết về bảo hiểm Term Life AIG cho gia đình người Mỹ gốc Việt năm 2025.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-img.webp',
   'Insurance Knowledge', true, '2025-04-07'),

  ('Will President Donald Trump Abolish the IRS and Federal Income Tax?',
   'Tổng Thống Donald Trump Có Xóa Bỏ IRS và Thuế Thu Nhập Liên Bang Không?',
   'One of the hottest topics in recent tax reform discussions is the possibility that President Trump may abolish the Internal Revenue Service.',
   'Một trong những chủ đề nóng nhất trong các cuộc thảo luận cải cách thuế gần đây là khả năng Tổng thống Trump có thể xóa bỏ Sở Thuế Vụ.',
   '<p>One of the hottest topics in recent tax reform discussions is the possibility that President Donald Trump may abolish the Internal Revenue Service (IRS) and federal income tax. What would this mean for Vietnamese-American families?</p>',
   '<p>Một trong những chủ đề nóng nhất trong các cuộc thảo luận cải cách thuế gần đây là khả năng Tổng thống Donald Trump có thể xóa bỏ Sở Thuế Vụ (IRS) và thuế thu nhập liên bang. Điều này có nghĩa gì với gia đình người Mỹ gốc Việt?</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/04/president-donald-trump-abolish-the-internal-revenue-service-irs-and-federal-income-tax-768x512.jpg',
   'Investment, Saving & Retire', true, '2025-03-25'),

  ('President Donald Trump Imposes a 46% Retaliatory Tariff on Vietnam',
   'Tổng Thống Donald Trump Áp Thuế Đối Ứng 46% Lên Việt Nam',
   'President Donald Trump has announced a decision to impose a 46% retaliatory tariff on Vietnam — a move that has shocked international trade circles.',
   'Tổng thống Donald Trump đã công bố quyết định áp thuế đối ứng 46% lên Việt Nam — động thái gây sốc cho giới thương mại quốc tế.',
   '<p>In a move that has shocked international trade circles, President Donald Trump has announced a decision to impose a 46% retaliatory tariff on Vietnam. What does this mean for Vietnamese-Americans and their families in Vietnam?</p>',
   '<p>Trong một động thái gây sốc cho giới thương mại quốc tế, Tổng thống Donald Trump đã công bố quyết định áp thuế đối ứng 46% lên Việt Nam. Điều này có nghĩa gì với người Mỹ gốc Việt và gia đình họ ở Việt Nam?</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/04/tong-thong-donald-trump-ap-thue-doi-ung-46-len-viet-nam-president-donald-trump-imposes-46-reciprocal-tax-on-vietnam-thumbnail-768x512.jpg',
   'Health - Life', true, '2025-04-02'),

  ('ARV Treatment: How Long Can People Living with HIV Expect to Live?',
   'Điều Trị ARV: Người Sống Chung HIV Có Thể Sống Được Bao Lâu?',
   'Thanks to advances in modern medicine — especially ARV therapy — the life expectancy of people living with HIV has significantly improved.',
   'Nhờ những tiến bộ trong y học hiện đại — đặc biệt là liệu pháp ARV — tuổi thọ của người sống chung với HIV đã được cải thiện đáng kể.',
   '<p>Thanks to advances in modern medicine – especially the advent of antiretroviral therapy (ARV) – the life expectancy of people living with HIV has significantly improved. This has important implications for life insurance eligibility.</p>',
   '<p>Nhờ những tiến bộ trong y học hiện đại — đặc biệt là sự ra đời của liệu pháp kháng retrovirus (ARV) — tuổi thọ của người sống chung với HIV đã được cải thiện đáng kể. Điều này có ý nghĩa quan trọng đối với khả năng tham gia bảo hiểm nhân thọ.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/03/dieu-tri-arv-treatment-thumbnail-768x512.jpg',
   'Health - Life', true, '2025-03-17'),

  ('U.S. Immigration Requirements in 2025: A Comprehensive A-Z Guide',
   'Điều Kiện Nhập Cư Mỹ 2025: Hướng Dẫn A-Z Toàn Diện',
   'Planning to settle in the United States by 2025? This article covers all immigration pathways and requirements for Vietnamese applicants.',
   'Bạn đang lên kế hoạch định cư tại Hoa Kỳ vào năm 2025? Bài viết này bao gồm tất cả các con đường nhập cư và yêu cầu cho người Việt.',
   '<p>Are you nurturing the American dream and planning to settle in the United States by 2025? This article covers all immigration pathways and requirements specifically tailored for Vietnamese applicants.</p>',
   '<p>Bạn đang ấp ủ giấc mơ Mỹ và lên kế hoạch định cư tại Hoa Kỳ vào năm 2025? Bài viết này bao gồm tất cả các con đường nhập cư và yêu cầu dành riêng cho người Việt Nam.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/03/dieu-kien-nhap-cu-my-2025-u-s-immigration-requirements-in-2025-thumbnail-768x512.jpg',
   'Health - Life', true, '2025-03-12'),

  ('HOT: Win a Round-Trip Ticket from the U.S. to Vietnam — Lunar New Year 2027!',
   'HOT: Trúng Vé Khứ Hồi Từ Mỹ Về Việt Nam — Tết Nguyên Đán 2027!',
   'VietPoint Insurance & Tax is delighted to introduce the Round-Trip Ticket Giveaway Program for Lunar New Year 2027.',
   'VietPoint Insurance & Tax vui mừng giới thiệu Chương Trình Tặng Vé Khứ Hồi cho Tết Nguyên Đán 2027.',
   '<p>To express our gratitude for your trust and support, VietPoint Insurance & Tax is delighted to introduce the Round-Trip Ticket Giveaway Program for Lunar New Year 2027. Find out how to participate and win.</p>',
   '<p>Để bày tỏ lòng biết ơn vì sự tin tưởng và ủng hộ của bạn, VietPoint Insurance & Tax vui mừng giới thiệu Chương Trình Tặng Vé Khứ Hồi cho Tết Nguyên Đán 2027. Tìm hiểu cách tham gia và chiến thắng.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/03/Get-free-round-trip-tickets-us-vietnam-768x432.png',
   'Event', true, '2025-03-10'),

  ('Announcement of Results: Free Round-Trip Ticket Program USA - Vietnam 2025',
   'Thông Báo Kết Quả: Chương Trình Vé Khứ Hồi Miễn Phí Mỹ - Việt Nam 2025',
   'VietPoint Insurance & Tax sincerely thanks our valued customers for their interest in the Free Round-Trip Ticket Program USA - Vietnam 2025.',
   'VietPoint Insurance & Tax chân thành cảm ơn quý khách hàng đã quan tâm đến Chương Trình Vé Khứ Hồi Miễn Phí Mỹ - Việt Nam 2025.',
   '<p>VietPoint Insurance & Tax sincerely thanks our valued customers for their interest in the Free Round-Trip Ticket Program USA - Vietnam 2025. The results and lucky winners are announced in this post.</p>',
   '<p>VietPoint Insurance & Tax chân thành cảm ơn quý khách hàng đã quan tâm đến Chương Trình Vé Khứ Hồi Miễn Phí Mỹ - Việt Nam 2025. Kết quả và những người may mắn được công bố trong bài viết này.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2025/01/ket-qua-free-ve-khu-hoi-hoa-ky-viet-nam-results-of-free-round-trip-ticket-usa-vietnam-2025-thumbnail-768x512.jpg',
   'Event', true, '2025-01-07'),

  ('Program: Free Round-Trip Tickets USA - Vietnam for VietPoint Customers',
   'Chương Trình: Vé Khứ Hồi Miễn Phí Mỹ - Việt Nam cho Khách Hàng VietPoint',
   'To serve the travel needs of Vietnamese people in the U.S. returning to Vietnam to visit family and celebrate the Lunar New Year.',
   'Để phục vụ nhu cầu đi lại của người Việt tại Mỹ về Việt Nam thăm gia đình và đón Tết Nguyên Đán.',
   '<p>To serve the travel needs of Vietnamese people in the U.S. returning to Vietnam to visit family and celebrate the Lunar New Year, VietPoint Insurance & Tax is pleased to introduce this exciting giveaway program.</p>',
   '<p>Để phục vụ nhu cầu đi lại của người Việt tại Mỹ về Việt Nam thăm gia đình và đón Tết Nguyên Đán, VietPoint Insurance & Tax vui mừng giới thiệu chương trình tặng quà hấp dẫn này.</p>',
   'https://thinksmartinsurance.com/wp-content/uploads/2024/08/free-round-trip-ticket-usa-vn-thinksmart-insurance-thumbnail-1-768x512.jpg',
   'Event', true, '2024-08-01');

-- ============================================================
-- 8. CUSTOMER STORIES
-- ============================================================
truncate table customer_stories restart identity cascade;
insert into customer_stories (name, location, amount, story, tag, tag_color, active) values
  ('Linh T.', 'Lawrenceville, GA', '$500,000',
   'My husband passed away suddenly last year. VietPoint had set up our term life policy 3 years earlier. When I called them, they guided me through the entire claims process within 2 weeks. That $500,000 paid off our mortgage and secured my children''s education.',
   'Term Life Claim', '#2F5E9E', true),
  ('David N.', 'Atlanta, GA', '$1.2M',
   'I started my IUL at age 35. My agent showed me how to structure it as a Max Funded IUL. After 20 years, I have $1.2M in cash value — completely tax-free. I retired early and my children each received $200,000 at age 18.',
   'IUL Success', '#16a34a', true),
  ('Huong M.', 'Duluth, GA', '$85,000',
   'When I was diagnosed with cancer, I had no idea my IUL policy had a living benefits rider. VietPoint''s team explained that I could access $85,000 for my medical treatment immediately. That saved my life without destroying my finances.',
   'Living Benefits', '#dc2626', true),
  ('Kevin P.', 'Norcross, GA', '$300,000',
   'I started an IUL policy for my daughter when she was born. By the time she turned 18, she had $300,000 in her account — enough for college and a down payment on her first home. Best investment I ever made.',
   'Kid IUL', '#ea580c', true),
  ('Thanh H.', 'Suwanee, GA', '$2,400/year',
   'VietPoint reviewed my tax situation and found that my insurance premiums were costing me more than necessary. They restructured my coverage and I now save $2,400 per year in premiums while having better protection.',
   'Tax Savings', '#7c3aed', true);

-- ============================================================
-- 9. MANUAL GUIDES
-- ============================================================
truncate table manual_guides restart identity cascade;
insert into manual_guides (title, date_label, description, tag, active) values
  ('How to Read Your Insurance Policy Statement', 'Updated Jan 2026',
   'A step-by-step visual guide to understanding your annual insurance statement, including cash value, death benefit, and premium details.',
   'Policy Reading', true),
  ('How to Add a Beneficiary to Your Policy', 'Updated Feb 2026',
   'Learn how to update or add beneficiaries to your VietPoint insurance policy — online or in-person.',
   'Policy Update', true),
  ('Understanding Living Benefits: What You Can Claim', 'Updated Mar 2026',
   'A complete guide to the living benefits riders included in your IUL policy, and which medical conditions qualify for early payout.',
   'Living Benefits', true),
  ('How to Access Your Cash Value', 'Updated Mar 2026',
   'This guide explains the three ways you can access the cash value in your IUL policy: withdrawals, loans, and surrenders — and the tax implications of each.',
   'Cash Value', true),
  ('Filing a Death Benefit Claim', 'Updated Apr 2026',
   'A compassionate guide for family members on how to file a death benefit claim, what documents are needed, and typical processing timelines.',
   'Claims', true),
  ('Understanding Your Premium Payment Schedule', 'Updated Apr 2026',
   'Learn about your premium schedule, grace periods, and how to set up automatic payments to keep your policy in force.',
   'Payments', true);

-- ============================================================
-- 10. CLAIMS STEPS
-- ============================================================
truncate table claims_steps restart identity cascade;
insert into claims_steps (num, title, description, sort_order, active) values
  ('01', 'Notify VietPoint Immediately',
   'Contact our office as soon as a qualifying event occurs. Call (678) 825-3737 or visit us in Lawrenceville, GA. Available Sunday–Thursday, 9 AM–7 PM ET.',
   1, true),
  ('02', 'Gather Required Documents',
   'Collect all relevant documentation: policy number, government-issued ID, medical records or doctor''s statement, and death certificate if applicable.',
   2, true),
  ('03', 'Submit Your Claim Form',
   'Our bilingual team will help you complete and submit the official claim form to the insurance carrier accurately and on time.',
   3, true),
  ('04', 'Claim Review & Verification',
   'The insurance company reviews your claim. This typically takes 5–15 business days. We stay in contact to resolve any questions quickly.',
   4, true),
  ('05', 'Receive Your Benefit',
   'Once approved, your benefit is paid out via check or direct deposit. For living benefits, funds are available within 3–5 business days.',
   5, true);

-- ============================================================
-- 11. PRIORITY PERKS
-- ============================================================
truncate table priority_perks restart identity cascade;
insert into priority_perks (icon, label, description, sort_order, active) values
  ('🥇', 'Priority Claims Processing',
   'VIP members receive expedited claims handling — your case is assigned to a dedicated senior agent and processed in half the standard time.',
   1, true),
  ('📞', '24/7 Dedicated Hotline',
   'Access a private priority phone line staffed by senior agents any time, day or night. No hold queues, no automated systems.',
   2, true),
  ('💰', 'Annual Policy Review',
   'A complimentary annual review of all your policies to ensure your coverage keeps pace with your life changes and financial goals.',
   3, true),
  ('🎁', 'Exclusive Member Discounts',
   'Access preferred premium rates, family bundle discounts, and special offers not available to standard policyholders.',
   4, true),
  ('📋', 'Estate & Tax Planning Consultation',
   'Two complimentary sessions per year with our certified tax and estate planning specialists — a $500 value included free.',
   5, true),
  ('🌟', 'Community Event Invitations',
   'Exclusive invitations to VietPoint member appreciation events, financial education seminars, and cultural community gatherings.',
   6, true);

-- ============================================================
-- 12. IUL REASONS (Why Choose IUL)
-- ============================================================
truncate table iul_reasons restart identity cascade;
insert into iul_reasons (icon, title, description, sort_order, active) values
  ('🛡️', 'Market-Linked Growth, Zero Loss',
   'Your cash value grows based on stock market index performance — but a 0% floor means you NEVER lose money, even when markets crash.',
   1, true),
  ('💰', 'Tax-Free Retirement Income',
   'Contributions grow tax-deferred and can be accessed tax-free in retirement through policy loans — completely legal under IRS code.',
   2, true),
  ('❤️', 'Living Benefits Included',
   'Critical illness, chronic illness, and terminal illness riders allow you to access your death benefit while still alive when you need it most.',
   3, true),
  ('♾️', 'Permanent Protection',
   'Unlike term insurance, IUL never expires. Your family is protected for life as long as the policy is maintained.',
   4, true),
  ('📈', 'Flexible Premiums',
   'Pay more when you earn more, less when cash is tight. IUL adjusts to your financial situation with no penalty for premium flexibility.',
   5, true),
  ('👨‍👩‍👧', 'Legacy for Your Children',
   'Pass on a tax-free death benefit to your children and grandchildren — creating generational wealth that compounds over time.',
   6, true);

-- ============================================================
-- 13. IUL STEPS (How It Works)
-- ============================================================
truncate table iul_steps restart identity cascade;
insert into iul_steps (step_label, title, description, sort_order, active) values
  ('STEP 1', 'Free Consultation',
   'Meet with a licensed VietPoint agent to discuss your financial goals, risk tolerance, and coverage needs. No obligation, no pressure.',
   1, true),
  ('STEP 2', 'Custom Policy Design',
   'Your agent designs an IUL policy tailored specifically to your family''s needs — optimizing the balance between growth and protection.',
   2, true),
  ('STEP 3', 'Application & Underwriting',
   'Complete the application and health questionnaire. Most policies are approved within 2–4 weeks through a simple medical review.',
   3, true),
  ('STEP 4', 'Policy Activation',
   'Once approved, your policy activates immediately. Your premiums start building cash value and your family is protected from day one.',
   4, true),
  ('STEP 5', 'Annual Review & Optimization',
   'VietPoint reviews your policy every year to ensure it continues to meet your evolving financial goals and life changes.',
   5, true);

-- ============================================================
-- 14. IUL FAQS
-- ============================================================
truncate table iul_faqs restart identity cascade;
insert into iul_faqs (question, answer, sort_order, active) values
  ('How is IUL different from a savings account?',
   'A savings account earns a fixed 0.5–2% interest and is fully taxable. IUL cash value tracks a stock index (like S&P 500) and can earn 6–12% annually — all tax-deferred, with a 0% floor so you never lose money.',
   1, true),
  ('Can I withdraw money from my IUL policy?',
   'Yes. You can access your cash value through tax-free policy loans or withdrawals at any age. There are no IRS penalties or age restrictions like with 401K or IRA accounts.',
   2, true),
  ('What happens if I stop paying premiums?',
   'IUL policies have a "premium flexibility" feature. If you miss payments, the policy can sustain itself using accumulated cash value — as long as the cash value is sufficient to cover the policy''s cost of insurance.',
   3, true),
  ('Is IUL better than a 401K or Roth IRA?',
   'They serve different purposes. IUL has no contribution limits, offers market-linked growth with a floor, and includes life insurance protection. Many clients use IUL alongside their 401K as a tax diversification strategy.',
   4, true),
  ('How much does an IUL policy cost?',
   'Premiums vary based on age, health, coverage amount, and desired cash accumulation. A typical VietPoint client pays $300–$800/month. Contact us for a free personalized quote.',
   5, true),
  ('Is my money safe in an IUL policy?',
   'Yes. IUL policies are regulated by state insurance departments. Your cash value has a 0% floor guarantee — meaning even if the market drops 40%, your account value does not decrease. Your principal is always protected.',
   6, true);

-- ============================================================
-- 15. KID IUL BENEFITS
-- ============================================================
truncate table kid_iul_benefits restart identity cascade;
insert into kid_iul_benefits (icon, title, description, sort_order, active) values
  ('🔒', 'Guaranteed Insurability for Life',
   'Starting a policy young locks in your child''s insurability regardless of any future health conditions. They can never be denied coverage.',
   1, true),
  ('📚', 'Tax-Free College Fund',
   'The cash value accumulated by age 18 can be accessed tax-free — providing a substantial fund for college tuition, room, and board.',
   2, true),
  ('💹', 'Compounding Growth',
   'Starting at age 1 vs age 18 can result in 3–5x more cash value at retirement. Compound interest works best over long time horizons.',
   3, true),
  ('🏠', 'First Home Down Payment',
   'Parents commonly use the cash value in their child''s IUL as a tax-free gift toward their first home purchase at age 25–30.',
   4, true),
  ('❤️', 'Living Benefits for Illness',
   'If your child is ever diagnosed with a critical illness, the policy''s living benefits provide immediate access to funds for treatment.',
   5, true),
  ('💸', 'Low Premium Locked In',
   'Insurance premiums are based on age and health at the time of application. Locking in a policy at age 0–5 means the lowest possible premiums for life.',
   6, true);

-- ============================================================
-- 16. MAX FUNDED IUL REASONS
-- ============================================================
truncate table max_iul_reasons restart identity cascade;
insert into max_iul_reasons (num, title, description, sort_order, active) values
  ('1', 'Maximum Tax-Free Accumulation',
   'By overfunding the policy to the TEFRA/DEFRA limits, you maximize the cash value growth engine while maintaining life insurance qualification. This is the most tax-efficient legal wealth accumulation strategy available.',
   1, true),
  ('2', 'Superior Returns vs. Traditional Retirement Accounts',
   'Max Funded IUL clients historically achieve 8–15% annual index credits — significantly outperforming the 5–7% average of 401K plans, without any market loss risk.',
   2, true),
  ('3', 'No Government Restrictions',
   'Unlike 401K and IRA, Max Funded IUL has no contribution limits, no required minimum distributions at age 73, and no 10% early withdrawal penalty. You are in complete control.',
   3, true),
  ('4', 'Protected From Creditors',
   'In most states, life insurance cash values are exempt from creditor claims. This makes Max Funded IUL an exceptional asset protection vehicle for business owners and professionals.',
   4, true),
  ('5', 'Tax-Free Legacy Transfer',
   'The death benefit passes to your beneficiaries completely income-tax-free, creating a powerful multigenerational wealth transfer that bypasses the probate process.',
   5, true);

-- ============================================================
-- 17. TERM LIFE BENEFITS
-- ============================================================
truncate table termlife_benefits restart identity cascade;
insert into termlife_benefits (icon, title, description, sort_order, active) values
  ('💵', 'Most Affordable Coverage',
   'Term life offers the highest death benefit per dollar of premium. A healthy 35-year-old can get $500,000 of coverage for as little as $25–$40 per month.',
   1, true),
  ('⏱️', 'Flexible Term Lengths',
   'Choose coverage for 10, 15, 20, or 30 years — aligned with your mortgage, your children''s dependency years, or your income replacement needs.',
   2, true),
  ('🏥', 'Living Benefits Rider',
   'Many term policies include riders for terminal, chronic, and critical illness — allowing you to access up to 90% of the death benefit if diagnosed with a qualifying condition.',
   3, true),
  ('🔄', 'Convertible to Permanent',
   'Most VietPoint term policies are convertible to permanent IUL without a new health exam — giving you the option to upgrade as your financial situation improves.',
   4, true),
  ('👨‍👩‍👧', 'Income Replacement',
   'If you pass away, the death benefit replaces your income for your family — covering mortgage payments, children''s education, and living expenses for years.',
   5, true),
  ('📋', 'Simple Application',
   'Many term policies are available with simplified underwriting — just answer a few health questions with no medical exam required for coverage up to $500,000.',
   6, true);
