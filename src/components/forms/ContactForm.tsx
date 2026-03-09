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
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Send, 
  CheckCircle, 
  Mail, 
  User, 
  Building, 
  MessageSquare,
  Zap,
  Clock,
  AlertCircle
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  priority: z.enum(['normal', 'high', 'urgent']),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  variant?: 'default' | 'compact' | 'emergency';
  preSelectedService?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  variant = 'default', 
  preSelectedService,
  className = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string[] }>({});

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priority: 'normal',
      subject: preSelectedService || '',
    }
  });

  const subjects = [
    'WordPress Development',
    'WordPress Migration',
    'Performance Optimization',
    'Security Audit',
    'Maintenance & Support',
    'Emergency Support',
    'Custom Plugin Development',
    'E-commerce Solutions',
    'General Inquiry',
    'Other'
  ];

  const budgetRanges = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelines = [
    'ASAP (Rush Job)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  // Real-time email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    // Check for common email providers
    const commonProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = email.split('@')[1];
    return commonProviders.includes(domain) || domain.includes('.');
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setValidationErrors({});

    try {
      // Simulate API call with validation
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Additional validations
      const errors: { [key: string]: string[] } = {};
      
      if (!validateEmail(data.email)) {
        errors.email = ['Please enter a valid email address'];
      }

      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        toast({
          title: "Validation Error",
          description: "Please fix the errors and try again.",
          variant: "destructive",
        });
        return;
      }

      // Success
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll respond within 2 business hours",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 5000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`${className} animate-fade-in`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for contacting us. We'll respond within 2 business hours.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>2hr Response</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>Confirmed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className} ${variant === 'emergency' ? 'border-red-200 bg-red-50/50' : ''}`}>
      <CardContent className="p-6">
        {variant === 'emergency' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-red-800">Emergency Support</h3>
            </div>
            <p className="text-red-700 text-sm">
              For urgent issues requiring immediate attention (site down, security breach, etc.)
            </p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Smith" 
                        {...field}
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
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
                    <FormLabel className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@company.com" 
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          // Real-time validation
                          if (e.target.value && !validateEmail(e.target.value)) {
                            setValidationErrors(prev => ({
                              ...prev,
                              email: ['Please enter a valid email address']
                            }));
                          } else {
                            setValidationErrors(prev => {
                              const { email, ...rest } = prev;
                              return rest;
                            });
                          }
                        }}
                        className={`transition-all focus:ring-2 focus:ring-primary/20 ${
                          validationErrors.email ? 'border-red-500' : ''
                        }`}
                      />
                    </FormControl>
                    <FormMessage />
                    {validationErrors.email && (
                      <p className="text-sm text-red-600 mt-1">{validationErrors.email[0]}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>Company Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Company" 
                        {...field}
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Needed *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="normal">Normal Priority</SelectItem>
                        <SelectItem value="high">High Priority (+15%)</SelectItem>
                        <SelectItem value="urgent">🚨 Urgent (+30%)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {variant !== 'compact' && (
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message *</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={variant === 'emergency' 
                        ? "Describe the urgent issue in detail. Include what happened, when it occurred, and any error messages..."
                        : "Tell us about your project, requirements, goals, and any specific features you need..."
                      }
                      className="min-h-24 transition-all focus:ring-2 focus:ring-primary/20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="text-xs text-muted-foreground mt-1">
                    {field.value?.length || 0} characters (minimum 10)
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              className={`w-full transition-all ${
                variant === 'emergency' 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  {variant === 'emergency' ? 'Send Emergency Request' : 'Send Message'}
                  {variant === 'emergency' ? (
                    <Zap className="w-4 h-4 ml-2" />
                  ) : (
                    <Send className="w-4 h-4 ml-2" />
                  )}
                </>
              )}
            </Button>

            {/* Response Time Notice */}
            <div className="text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                    <span>
                      {variant === 'emergency' ? '15 min response' : '2 hour response'}
                    </span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free consultation</span>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;


