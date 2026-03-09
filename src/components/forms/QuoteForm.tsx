import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';
import { 
  ArrowRight,
  ArrowLeft,
  Check,
  DollarSign,
  Globe,
  Star,
  Users,
  Target,
  Shield,
  Zap,
  Clock,
  Calendar,
  CheckCircle,
  Calculator
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
  hasExistingSite: z.boolean().optional(),
  currentSiteUrl: z.string().optional(),
  designPreference: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface QuoteFormProps {
  onQuoteGenerated?: (quote: Record<string, unknown>) => void;
  className?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onQuoteGenerated, className = '' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedQuote, setEstimatedQuote] = useState<number>(0);
  const totalSteps = 4;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: [15000],
      features: [],
      priority: 'normal',
      hasExistingSite: false
    }
  });

  const projectTypes = [
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      description: 'Online store with payment processing',
      icon: <DollarSign className="w-8 h-8" />,
      basePrice: 8000,
      popular: true
    },
    {
      id: 'corporate',
      title: 'Corporate Website',
      description: 'Professional business presence',
      icon: <Globe className="w-8 h-8" />,
      basePrice: 5000,
      popular: false
    },
    {
      id: 'portfolio',
      title: 'Portfolio Site',
      description: 'Showcase your work beautifully',
      icon: <Star className="w-8 h-8" />,
      basePrice: 3000,
      popular: false
    },
    {
      id: 'blog',
      title: 'Blog/Magazine',
      description: 'Content-focused publication',
      icon: <Users className="w-8 h-8" />,
      basePrice: 4000,
      popular: false
    },
    {
      id: 'custom',
      title: 'Custom Solution',
      description: 'Tailored to your specific needs',
      icon: <Target className="w-8 h-8" />,
      basePrice: 10000,
      popular: true
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Ongoing care for existing sites',
      icon: <Shield className="w-8 h-8" />,
      basePrice: 500,
      popular: false
    }
  ];

  const features = [
    { name: 'Custom Design', price: 2000 },
    { name: 'Mobile Responsive', price: 500 },
    { name: 'SEO Optimization', price: 1000 },
    { name: 'Content Management', price: 800 },
    { name: 'E-commerce Integration', price: 3000 },
    { name: 'Payment Processing', price: 1500 },
    { name: 'User Accounts', price: 2000 },
    { name: 'Multi-language Support', price: 2500 },
    { name: 'Advanced Analytics', price: 800 },
    { name: 'Third-party Integrations', price: 1200 },
    { name: 'Performance Optimization', price: 1000 },
    { name: 'Security Features', price: 1500 },
    { name: 'Email Marketing', price: 1000 },
    { name: 'Social Media Integration', price: 600 },
    { name: 'Advanced Search', price: 1500 },
    { name: 'Booking System', price: 2500 }
  ];

  const timelines = [
    { id: '2-4weeks', label: '2-4 weeks', description: 'Rush job', multiplier: 1.2 },
    { id: '1-2months', label: '1-2 months', description: 'Standard timeline', multiplier: 1.0 },
    { id: '2-3months', label: '2-3 months', description: 'Complex projects', multiplier: 0.95 },
    { id: '3+months', label: '3+ months', description: 'Enterprise solutions', multiplier: 0.9 }
  ];

  const designPreferences = [
    'Modern & Minimalist',
    'Bold & Creative',
    'Professional & Corporate',
    'Playful & Colorful',
    'Elegant & Sophisticated',
    'Match Existing Brand',
    'Let You Decide'
  ];

  // Calculate estimated quote based on selections
  const calculateQuote = () => {
    const watchedValues = form.watch();
    let total = 0;

    // Base price from project type
    const selectedType = projectTypes.find(type => type.id === watchedValues.projectType);
    if (selectedType) {
      total += selectedType.basePrice;
    }

    // Add feature costs
    const selectedFeatures = features.filter(feature => 
      watchedValues.features?.includes(feature.name)
    );
    total += selectedFeatures.reduce((sum, feature) => sum + feature.price, 0);

    // Apply timeline multiplier
    const selectedTimeline = timelines.find(timeline => timeline.id === watchedValues.timeline);
    if (selectedTimeline) {
      total *= selectedTimeline.multiplier;
    }

    // Apply priority multiplier
    if (watchedValues.priority === 'high') {
      total *= 1.15;
    } else if (watchedValues.priority === 'urgent') {
      total *= 1.3;
    }

    setEstimatedQuote(Math.round(total));
    return Math.round(total);
  };

  // Update quote when form changes
  React.useEffect(() => {
    calculateQuote();
  }, [form.watch()]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const finalQuote = calculateQuote();
      const quoteData = {
        ...data,
        estimatedCost: finalQuote,
        quoteId: `QT-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };

      if (onQuoteGenerated) {
        onQuoteGenerated(quoteData);
      }

      toast({
        title: "Quote Generated Successfully!",
        description: `Your estimated project cost is $${finalQuote.toLocaleString()}`,
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate quote. Please try again.",
        variant: "destructive",
      });
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
    <Card className={className}>
      <CardContent className="p-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 mb-4" />
          
          {/* Step Indicators */}
          <div className="flex justify-between">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  i + 1 <= currentStep 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {i + 1 < currentStep ? <Check className="w-4 h-4" /> : i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Quote Estimator */}
        {currentStep > 1 && estimatedQuote > 0 && (
          <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="font-semibold">Estimated Quote:</span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatBudget(estimatedQuote)}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              This is a preliminary estimate. Final quote may vary based on project requirements.
            </p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            
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
                              <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                              <div className="text-primary font-semibold">
                                Starting at {formatBudget(type.basePrice)}
                              </div>
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

            {/* Step 2: Features & Budget */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Features & Budget</h2>
                  <p className="text-muted-foreground">Select the features you need and set your budget range</p>
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
                      <div className="grid md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                        {features.map((feature) => (
                          <div key={feature.name} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id={feature.name}
                                checked={field.value.includes(feature.name)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([...field.value, feature.name]);
                                  } else {
                                    field.onChange(field.value.filter(f => f !== feature.name));
                                  }
                                }}
                              />
                              <Label 
                                htmlFor={feature.name}
                                className="text-sm cursor-pointer"
                              >
                                {feature.name}
                              </Label>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              +{formatBudget(feature.price)}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: Timeline & Details */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Timeline & Project Details</h2>
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
                                  {timeline.multiplier !== 1.0 && (
                                    <Badge variant={timeline.multiplier > 1.0 ? "destructive" : "secondary"} className="text-xs">
                                      {timeline.multiplier > 1.0 ? `+${Math.round((timeline.multiplier - 1) * 100)}%` : 
                                       `-${Math.round((1 - timeline.multiplier) * 100)}%`}
                                    </Badge>
                                  )}
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

                {/* Additional Options */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="hasExistingSite"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have an existing website that needs to be redesigned/migrated
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.watch('hasExistingSite') && (
                    <FormField
                      control={form.control}
                      name="currentSiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://your-current-site.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="designPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Preference</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your preferred design style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {designPreferences.map((preference) => (
                              <SelectItem key={preference} value={preference}>
                                {preference}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">How can we reach you with your detailed quote?</p>
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
                  
                  
                </div>
                
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your project in detail. Include any specific requirements, design preferences, functionality needs, target audience, or examples of sites you like..."
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Priority</FormLabel>
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
                      Generating Quote...
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
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;


