import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, Filter, TrendingUp, Users, Clock, Video, CheckCircle, DollarSign, Globe, ArrowRight, BookOpen, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HeroBanner = () => {
  const [searchType, setSearchType] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleSearch = () => {
    if (searchType === 'tutors') {
      window.location.href = `/tutors?search=${encodeURIComponent(searchTerm)}`;
    } else {
      window.location.href = `/languages?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-24">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-left"
              variants={fadeInUp}
            >
              Learn Languages with
              <span className="text-primary"> Native Speakers</span> Worldwide
            </motion.h1>
            <motion.p
                className="text-lg text-muted-foreground mb-8 text-left"
              variants={fadeInUp}
            >
              Kết nối với giáo viên bản ngữ được chứng nhận và thành thạo bất kỳ ngôn ngữ nào thông qua các bài học 1-1 được cá nhân hóa.
            </motion.p>

            <motion.div
                className="relative mb-8"
              variants={fadeInUp}
            >
                <div className="flex gap-0">
                  <div className="relative flex-shrink-0">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-l-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[140px] h-12 border-r-0"
                  >
                    <option value="courses">Khóa học</option>
                    <option value="tutors">Giảng viên</option>
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                  <div className="flex flex-1">
                  <Input
                    type="text"
                    placeholder={searchType === 'tutors' ? 'Tìm giảng viên...' : 'Tìm khóa học...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 rounded-none border-r-0 h-12"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button
                    onClick={handleSearch}
                      className="rounded-l-none rounded-r-lg h-12 px-6"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
                className="flex flex-wrap justify-start gap-8"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (2.5k đánh giá)</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">50k+</span> Học viên
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">5k+</span> Giảng viên
              </div>
            </motion.div>
          </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online language learning"
                className="w-full h-auto max-h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-2 -left-2 bg-white p-2 rounded-lg shadow-md border">
                <div className="text-xl font-bold text-blue-600">5000+</div>
                <div className="text-xs text-gray-600">Giáo viên</div>
              </div>
              <div className="absolute -top-2 -right-2 bg-white p-2 rounded-lg shadow-md border">
                <div className="text-xl font-bold text-blue-600">100K+</div>
                <div className="text-xs text-gray-600">Học viên</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OneOnOneAd = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const packages = [
    {
      name: 'Trial Lesson',
      price: '300.000đ',
      originalPrice: '500.000đ',
      duration: '30 phút',
      features: ['Đánh giá trình độ', 'Tư vấn lộ trình', 'Trải nghiệm phương pháp'],
      popular: false
    },
    {
      name: 'Basic Package',
      price: '2.400.000đ',
      originalPrice: '3.000.000đ',
      duration: '8 buổi học',
      features: ['1-on-1 riêng tư', 'Tài liệu cá nhân hóa', 'Theo dõi tiến độ', 'Hỗ trợ 24/7'],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '4.500.000đ',
      originalPrice: '6.000.000đ',
      duration: '16 buổi học',
      features: ['Tất cả tính năng Basic', 'Mock test định kỳ', 'Chứng chỉ hoàn thành', 'Đảm bảo kết quả'],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            <span>1-on-1 Learning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Học 1-1 với Giáo viên Bản ngữ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trải nghiệm học tập cá nhân hóa hoàn toàn với giáo viên bản ngữ được chứng nhận
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: Users, title: '1-1 Riêng tư', desc: 'Học hoàn toàn riêng tư với giáo viên' },
            { icon: Clock, title: '24/7 Linh hoạt', desc: 'Đặt lịch học theo thời gian của bạn' },
            { icon: Star, title: '100% Tập trung', desc: 'Toàn bộ sự chú ý dành cho bạn' }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Card className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    Phổ biến nhất
                  </div>
                )}
                <CardContent className={`p-6 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                        : ''
                    }`}
                  >
                    Chọn gói học
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PopularLanguages = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const languages = [
    {
      name: 'English',
      flag: '🇺🇸',
      students: '45K+',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+15%'
    },
    {
      name: 'Chinese',
      flag: '🇨🇳',
      students: '32K+',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+22%'
    },
    {
      name: 'Spanish',
      flag: '🇪🇸',
      students: '28K+',
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+18%'
    },
    {
      name: 'French',
      flag: '🇫🇷',
      students: '25K+',
      image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+12%'
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      students: '18K+',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+25%'
    },
    {
      name: 'Korean',
      flag: '🇰🇷',
      students: '15K+',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+30%'
    },
    {
      name: 'German',
      flag: '🇩🇪',
      students: '12K+',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+8%'
    },
    {
      name: 'Italian',
      flag: '🇮🇹',
      students: '10K+',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: '+14%'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Trending Languages</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ngôn ngữ Phổ biến
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các ngôn ngữ được học nhiều nhất với giáo viên bản ngữ chất lượng cao
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Link to={`/languages/${lang.name.toLowerCase()}`} className="group block">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative">
                    <img
                      src={lang.image}
                      alt={lang.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-600">{lang.growth}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-center text-white">
                        <div className="text-2xl mb-1">{lang.flag}</div>
                        <div className="font-bold text-sm">{lang.name}</div>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                          <Users className="w-3 h-3" />
                          <span className="text-xs">{lang.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link
            to="/languages"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <span>Xem tất cả ngôn ngữ</span>
            <TrendingUp className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const courses = [
    {
      id: 1,
      title: 'English Conversation Mastery',
      instructor: 'Sarah Johnson (Native Speaker)',
      rating: 4.9,
      students: 1250,
      duration: '8 Curriculum',
      price: '625.000đ',
      originalPrice: '875.000đ',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'English 🇺🇸',
    },
    {
      id: 2,
      title: 'Spanish for Beginners',
      instructor: 'Carlos Rodriguez (Native Speaker)',
      rating: 4.8,
      students: 890,
      duration: '7 Curriculum',
      price: '450.000đ',
      originalPrice: '625.000đ',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Spanish 🇪🇸',
    },
    {
      id: 3,
      title: 'French Grammar & Speaking',
      instructor: 'Marie Dubois (Native Speaker)',
      rating: 4.9,
      students: 756,
      duration: '7 Curriculum',
      price: '700.000đ',
      originalPrice: '950.000đ',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'French 🇫🇷',
    },
    {
      id: 4,
      title: 'Business German',
      instructor: 'Hans Mueller (Native Speaker)',
      rating: 4.7,
      students: 645,
      duration: '7 Curriculum',
      price: '800.000đ',
      originalPrice: '1.050.000đ',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'German 🇩🇪',
    },
    {
      id: 5,
      title: 'Mandarin Chinese HSK Prep',
      instructor: 'Li Wei (Native Speaker)',
      rating: 4.8,
      students: 432,
      duration: '7 Curriculum',
      price: '750.000đ',
      originalPrice: '1.000.000đ',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Chinese 🇨🇳',
    },
    {
      id: 6,
      title: 'Japanese Conversation',
      instructor: 'Yuki Tanaka (Native Speaker)',
      rating: 4.9,
      students: 567,
      duration: '7 Curriculum',
      price: '650.000đ',
      originalPrice: '900.000đ',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Japanese 🇯🇵',
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Language Lessons</h2>
          <p className="text-lg text-muted-foreground">Learn with our most experienced and highly-rated native speakers</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Link to={`/course/${course.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {course.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">by {course.instructor}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                      </div>
                      <Button>
                        Book Lesson
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t pt-12">
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            You Might Also Like
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {courses.slice(0, 4).map((course) => (
              <motion.div
                key={`also-${course.id}`}
                variants={fadeInUp}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to={`/course/${course.id}`}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">{course.title}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">{course.rating}</span>
                        </div>
                        <span className="text-sm font-bold text-primary">{course.price}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button size="lg" asChild>
              <Link to="/tutors">
                View All Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TopTutors = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const topTutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      language: 'English',
      country: 'United States',
      flag: '🇺🇸',
      rating: 4.9,
      reviews: 1250,
      students: 15000,
      experience: '5 years',
      specialties: ['Business English', 'IELTS', 'Conversation'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 255000,
      availability: 'Available now',
      description: 'Certified English teacher specializing in business communication and IELTS preparation.',
      achievements: ['Top Rated', 'IELTS Expert']
    },
    {
      id: 2,
      name: 'Marie Dubois',
      language: 'French',
      country: 'France',
      flag: '🇫🇷',
      rating: 4.9,
      reviews: 890,
      students: 12000,
      experience: '6 years',
      specialties: ['DELF/DALF', 'Literature', 'Business French'],
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 280000,
      availability: 'Available now',
      description: 'French literature professor with expertise in exam preparation and business French.',
      achievements: ['Literature Expert', 'DELF Certified']
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      language: 'Japanese',
      country: 'Japan',
      flag: '🇯🇵',
      rating: 4.9,
      reviews: 756,
      students: 9500,
      experience: '4 years',
      specialties: ['JLPT', 'Anime Culture', 'Business Japanese'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 320000,
      availability: 'Available in 1 hour',
      description: 'Japanese culture enthusiast teaching language through cultural immersion.',
      achievements: ['JLPT Expert', 'Cultural Specialist']
    },
    {
      id: 4,
      name: 'Carlos Rodriguez',
      language: 'Spanish',
      country: 'Spain',
      flag: '🇪🇸',
      rating: 4.8,
      reviews: 645,
      students: 8900,
      experience: '5 years',
      specialties: ['Grammar', 'Pronunciation', 'Culture'],
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 220000,
      availability: 'Available in 2 hours',
      description: 'Native Spanish speaker passionate about sharing Spanish culture and language.',
      achievements: ['Grammar Master', 'Culture Expert']
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  return (
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="w-full px-8 lg:px-16">
          <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              <span>Top Rated Tutors</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Gặp gỡ các Giáo viên Hàng đầu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Học cùng những giáo viên bản ngữ được đánh giá cao nhất với kinh nghiệm và chuyên môn xuất sắc
            </p>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
          >
            {topTutors.map((tutor) => (
                <motion.div
                    key={tutor.id}
                    variants={fadeInUp}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                    <Link to={`/tutor/${tutor.id}`}>
                      <div className="relative">
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-600 transition-colors">
                            {tutor.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{tutor.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{tutor.country}</span>
                          <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                          <span className="text-sm text-muted-foreground">{tutor.experience}</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {tutor.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {tutor.specialties.slice(0, 2).map((specialty, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                          ))}
                          {tutor.specialties.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{tutor.specialties.length - 2}
                              </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{tutor.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>{tutor.reviews}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-indigo-600">
                              {formatPrice(tutor.price)}
                            </div>
                            <div className="text-xs text-muted-foreground">/giờ</div>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
            ))}
          </motion.div>

          <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tìm kiếm giáo viên phù hợp với bạn?
              </h3>
              <p className="text-muted-foreground mb-6">
                Khám phá hơn 5000+ giáo viên bản ngữ từ khắp nơi trên thế giới với nhiều chuyên môn khác nhau
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                  <Link to="/tutors">
                    Xem tất cả giáo viên
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

const BecomeTutorCTA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Thu nhập cao',
      description: 'Kiếm $15-50/giờ dạy ngôn ngữ bản ngữ của bạn'
    },
    {
      icon: Clock,
      title: 'Linh hoạt thời gian',
      description: 'Làm việc khi bạn muốn, từ bất cứ đâu trên thế giới'
    },
    {
      icon: Users,
      title: 'Học viên toàn cầu',
      description: 'Kết nối với học viên từ hơn 100 quốc gia'
    },
    {
      icon: Globe,
      title: 'Nền tảng uy tín',
      description: 'Tham gia cộng đồng 5000+ giáo viên chuyên nghiệp'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Trở thành <span className="text-blue-600">Giáo viên</span> cùng LinguaHub
            </motion.h2>
            <motion.p
              className="text-base text-gray-600 mb-6"
              variants={fadeInUp}
            >
              Chia sẻ ngôn ngữ bản ngữ của bạn với học viên trên toàn thế giới và kiếm tiền từ đam mê giảng dạy.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="p-3 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-2">
                        <div className="bg-blue-100 p-1.5 rounded-lg">
                          <benefit.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                          <p className="text-xs text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={fadeInUp}
            >
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/become-tutor">
                  Đăng ký làm giáo viên
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline">
                Tìm hiểu thêm
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-md mx-auto">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Online teaching"
                className="w-full h-auto max-h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-2 -left-2 bg-white p-2 rounded-lg shadow-md border">
              <div className="text-lg font-bold text-blue-600">5000+</div>
              <div className="text-xs text-gray-600">Giáo viên</div>
            </div>
            <div className="absolute -top-2 -right-2 bg-white p-2 rounded-lg shadow-md border">
              <div className="text-lg font-bold text-blue-600">100K+</div>
              <div className="text-xs text-gray-600">Học viên</div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingElements = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    {
      icon: Users,
      number: '100K+',
      label: 'Happy Students',
      description: 'Learning languages',
    },
    {
      icon: BookOpen,
      number: '5000+',
      label: 'Native Tutors',
      description: 'From 50+ countries',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Languages',
      description: 'Available to learn',
    },
    {
      icon: Clock,
      number: '1M+',
      label: 'Lessons',
      description: 'Successfully completed',
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose LinguaHub?</h2>
          <p className="text-lg text-gray-300">Join thousands of successful learners worldwide</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-400 mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <OneOnOneAd />
      <PopularLanguages />
      <ProductSection />
      <TopTutors />
      <BecomeTutorCTA />
      <FloatingElements />
    </>
  );
}
