import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Calendar, 
  DollarSign, 
  Globe, 
  Zap,
  Shield,
  Users,
  Target,
  Clock,
  Star
} from 'lucide-react';

const formSchema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.array(z.number()).length(1),
  timeline: z.string().min(1, "Please select a timeline"),
  features: z.array(z.string()).min(1, "Please select at least one feature"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  details: z.string().min(10, "Please provide more details about your project"),
  priority: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const GetQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: [15000],
      features: [],
      priority: 'normal'
    }
  });

  const projectTypes = [
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      description: 'Online store with payment processing',
      icon: <DollarSign className="w-8 h-8" />,
      popular: true
    },
    {
      id: 'corporate',
      title: 'Corporate Website',
      description: 'Professional business presence',
      icon: <Globe className="w-8 h-8" />,
      popular: false
    },
    {
      id: 'portfolio',
      title: 'Portfolio Site',
      description: 'Showcase your work beautifully',
      icon: <Star className="w-8 h-8" />,
      popular: false
    },
    {
      id: 'blog',
      title: 'Blog/Magazine',
      description: 'Content-focused publication',
      icon: <Users className="w-8 h-8" />,
      popular: false
    },
    {
      id: 'custom',
      title: 'Custom Solution',
      description: 'Tailored to your specific needs',
      icon: <Target className="w-8 h-8" />,
      popular: true
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Ongoing care for existing sites',
      icon: <Shield className="w-8 h-8" />,
      popular: false
    }
  ];

  const features = [
    'Custom Design',
    'Mobile Responsive',
    'SEO Optimization',
    'Content Management',
    'E-commerce Integration',
    'Payment Processing',
    'User Accounts',
    'Multi-language Support',
    'Advanced Analytics',
    'Third-party Integrations',
    'Performance Optimization',
    'Security Features',
    'Email Marketing',
    'Social Media Integration',
    'Advanced Search',
    'Booking System'
  ];

  const timelines = [
    { id: '2-4weeks', label: '2-4 weeks', description: 'Rush job (+20% fee)' },
    { id: '1-2months', label: '1-2 months', description: 'Standard timeline' },
    { id: '2-3months', label: '2-3 months', description: 'Complex projects' },
    { id: '3+months', label: '3+ months', description: 'Enterprise solutions' }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      // Handle success
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatBudget = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Project Quote
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Get Your Custom
                <span className="text-accent-light"> Quote</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Tell us about your project and we'll provide a detailed quote within 24 hours
              </p>
              
              {/* Progress Indicator */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/70">Step {currentStep} of {totalSteps}</span>
                  <span className="text-sm text-white/70">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2 bg-white/20" />
                
                {/* Step Indicators */}
                <div className="flex justify-between mt-4">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        i + 1 <= currentStep 
                          ? 'bg-white text-primary' 
                          : 'bg-white/20 text-white/50'
                      }`}
                    >
                      {i + 1 < currentStep ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Card className="shadow-2xl">
                    <CardContent className="p-8">
                      
                      {/* Step 1: Project Type */}
                      {currentStep === 1 && (
                        <div className="space-y-8 animate-fade-in">
                          <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">What type of project do you need?</h2>
                            <p className="text-muted-foreground">Choose the option that best describes your project</p>
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {projectTypes.map((type) => (
                                    <Card 
                                      key={type.id}
                                      className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg relative ${
                                        field.value === type.id 
                                          ? 'ring-2 ring-primary bg-primary/5' 
                                          : 'hover:bg-muted/50'
                                      }`}
                                      onClick={() => field.onChange(type.id)}
                                    >
                                      {type.popular && (
                                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent">
                                          Popular
                                        </Badge>
                                      )}
                                      <CardContent className="p-6 text-center">
                                        <div className="text-primary mb-4 flex justify-center">
                                          {type.icon}
                                        </div>
                                        <h3 className="font-bold mb-2">{type.title}</h3>
                                        <p className="text-sm text-muted-foreground">{type.description}</p>
                                        <div className={`w-6 h-6 rounded-full border-2 mx-auto mt-4 transition-all ${
                                          field.value === type.id 
                                            ? 'bg-primary border-primary' 
                                            : 'border-muted-foreground'
                                        }`}>
                                          {field.value === type.id && (
                                            <Check className="w-4 h-4 text-white m-0.5" />
                                          )}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* Step 2: Budget & Features */}
                      {currentStep === 2 && (
                        <div className="space-y-8 animate-fade-in">
                          <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Budget & Features</h2>
                            <p className="text-muted-foreground">Help us understand your budget and required features</p>
                          </div>
                          
                          {/* Budget Slider */}
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-semibold">Project Budget</FormLabel>
                                <div className="py-6">
                                  <div className="text-center mb-6">
                                    <div className="text-4xl font-bold text-primary">
                                      {formatBudget(field.value[0])}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                      This helps us recommend the right features for your budget
                                    </p>
                                  </div>
                                  <FormControl>
                                    <Slider
                                      min={2000}
                                      max={100000}
                                      step={1000}
                                      value={field.value}
                                      onValueChange={field.onChange}
                                      className="w-full"
                                    />
                                  </FormControl>
                                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                                    <span>$2K</span>
                                    <span>$50K</span>
                                    <span>$100K+</span>
                                  </div>
                                </div>
                              </FormItem>
                            )}
                          />

                          {/* Features Checklist */}
                          <FormField
                            control={form.control}
                            name="features"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-semibold">Required Features</FormLabel>
                                <p className="text-sm text-muted-foreground mb-4">
                                  Select all features you need for your project
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-3">
                                      <Checkbox
                                        id={feature}
                                        checked={field.value.includes(feature)}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            field.onChange([...field.value, feature]);
                                          } else {
                                            field.onChange(field.value.filter(f => f !== feature));
                                          }
                                        }}
                                      />
                                      <Label 
                                        htmlFor={feature}
                                        className="text-sm cursor-pointer hover:text-primary transition-colors"
                                      >
                                        {feature}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* Step 3: Timeline & Priority */}
                      {currentStep === 3 && (
                        <div className="space-y-8 animate-fade-in">
                          <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Timeline & Priority</h2>
                            <p className="text-muted-foreground">When do you need your project completed?</p>
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-semibold">Project Timeline</FormLabel>
                                <RadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  className="grid md:grid-cols-2 gap-4"
                                >
                                  {timelines.map((timeline) => (
                                    <div key={timeline.id}>
                                      <Label
                                        htmlFor={timeline.id}
                                        className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                                          field.value === timeline.id 
                                            ? 'border-primary bg-primary/5' 
                                            : 'border-border'
                                        }`}
                                      >
                                        <RadioGroupItem value={timeline.id} id={timeline.id} />
                                        <div className="flex-1">
                                          <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="font-semibold">{timeline.label}</span>
                                          </div>
                                          <p className="text-sm text-muted-foreground mt-1">
                                            {timeline.description}
                                          </p>
                                        </div>
                                      </Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-semibold">Project Priority</FormLabel>
                                <RadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  className="grid md:grid-cols-3 gap-4"
                                >
                                  <Label
                                    htmlFor="normal"
                                    className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                                      field.value === 'normal' 
                                        ? 'border-primary bg-primary/5' 
                                        : 'border-border'
                                    }`}
                                  >
                                    <RadioGroupItem value="normal" id="normal" />
                                    <div>
                                      <div className="font-semibold">Normal</div>
                                      <div className="text-sm text-muted-foreground">Standard priority</div>
                                    </div>
                                  </Label>
                                  
                                  <Label
                                    htmlFor="high"
                                    className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                                      field.value === 'high' 
                                        ? 'border-primary bg-primary/5' 
                                        : 'border-border'
                                    }`}
                                  >
                                    <RadioGroupItem value="high" id="high" />
                                    <div>
                                      <div className="font-semibold">High Priority</div>
                                      <div className="text-sm text-muted-foreground">+15% fee</div>
                                    </div>
                                  </Label>
                                  
                                  <Label
                                    htmlFor="urgent"
                                    className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                                      field.value === 'urgent' 
                                        ? 'border-primary bg-primary/5' 
                                        : 'border-border'
                                    }`}
                                  >
                                    <RadioGroupItem value="urgent" id="urgent" />
                                    <div>
                                      <div className="font-semibold text-red-600">Urgent</div>
                                      <div className="text-sm text-muted-foreground">+30% fee</div>
                                    </div>
                                  </Label>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* Step 4: Contact Details */}
                      {currentStep === 4 && (
                        <div className="space-y-8 animate-fade-in">
                          <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                            <p className="text-muted-foreground">How can we reach you with your quote?</p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Smith" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="john@company.com" type="email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your Company" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+1 (555) 123-4567" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="details"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Please describe your project in detail. Include any specific requirements, design preferences, functionality needs, or examples of sites you like..."
                                    className="min-h-32"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-8 mt-8 border-t">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          disabled={currentStep === 1}
                          className="px-8"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                        
                        {currentStep < totalSteps ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="px-8"
                          >
                            Next Step
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Get My Quote
                                <Zap className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetQuote;


