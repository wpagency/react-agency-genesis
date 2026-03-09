import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/common/SEOHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, User, Clock, Search, TrendingUp, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "WordPress 6.4 Performance Optimization Guide",
      excerpt: "Learn how to optimize your WordPress 6.4 site for maximum performance with our comprehensive guide covering caching, database optimization, and image compression.",
      content: "Complete guide to WordPress performance optimization...",
      author: "Agency Genesis Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Performance",
      tags: ["WordPress", "Performance", "Optimization", "Speed"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Security Best Practices for WordPress in 2024",
      excerpt: "Essential security measures every WordPress site owner should implement to protect against threats and vulnerabilities.",
      content: "WordPress security best practices...",
      author: "Security Expert",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Security",
      tags: ["Security", "WordPress", "Best Practices", "Protection"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "WordPress Migration Checklist: Zero Downtime Strategy",
      excerpt: "Step-by-step checklist for migrating WordPress sites with zero downtime. Includes preparation, execution, and post-migration validation.",
      content: "WordPress migration guide...",
      author: "Migration Specialist",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Migration",
      tags: ["Migration", "WordPress", "Checklist", "Downtime"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "Custom WordPress Plugin Development Tutorial",
      excerpt: "Learn to build custom WordPress plugins from scratch with our detailed tutorial covering hooks, actions, filters, and best practices.",
      content: "Plugin development tutorial...",
      author: "Developer",
      date: "2023-12-28",
      readTime: "20 min read",
      category: "Development",
      tags: ["Development", "Plugins", "PHP", "WordPress"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      title: "WordPress Maintenance: Monthly Checklist",
      excerpt: "Essential monthly maintenance tasks to keep your WordPress site running smoothly, secure, and optimized for performance.",
      content: "Maintenance checklist...",
      author: "Maintenance Team",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Maintenance",
      tags: ["Maintenance", "WordPress", "Checklist", "Updates"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 6,
      title: "Troubleshooting Common WordPress Errors",
      excerpt: "Quick solutions to the most common WordPress errors including white screen of death, 500 errors, and database connection issues.",
      content: "Troubleshooting guide...",
      author: "Support Team",
      date: "2023-12-15",
      readTime: "10 min read",
      category: "Troubleshooting",
      tags: ["Troubleshooting", "Errors", "WordPress", "Fixes"],
      featured: false,
      image: "/api/placeholder/800/400"
    }
  ];

  const categories = ["All", "Performance", "Security", "Migration", "Development", "Maintenance", "Troubleshooting"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const seoData = {
    title: "WordPress Blog - Tips, Tutorials & Best Practices | Agency Genesis",
    description: "Expert WordPress tips, tutorials, and best practices. Learn about performance optimization, security, migrations, and custom development.",
    keywords: ["WordPress blog", "WordPress tips", "WordPress tutorials", "WordPress best practices", "WordPress development"]
  };

  return (
    <>
      <SEOHead data={seoData} path="/blog" />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-8">
              <BookOpen className="w-4 h-4 mr-2" />
              WordPress Expert Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              WordPress <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Expert tips, tutorials, and insights from 10+ years of WordPress experience. 
              Learn best practices and stay updated with the latest WordPress developments.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <TrendingUp className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-space-grotesk font-bold text-foreground">
                  Featured Articles
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500">
                    {/* Featured Image */}
                    <div className="relative h-48 bg-gradient-primary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>

                      <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-space-grotesk font-bold text-foreground">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-500 hover:scale-105">
                  {/* Post Image */}
                  <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>

                    <h3 className="text-lg font-space-grotesk font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" className="group text-xs">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Stay Updated with WordPress Tips
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the latest WordPress tutorials, tips, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              No spam. Unsubscribe anytime. Privacy policy compliant.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground mb-6">
              Need WordPress Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert team is ready to help you with any WordPress challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Expert Help
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;



