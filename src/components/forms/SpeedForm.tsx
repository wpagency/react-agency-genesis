import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  website: z.string().url('Please enter a valid website URL').or(z.string().min(1, 'Website URL is required')),
  currentSpeed: z.string().min(1, 'Please select your current load time'),
  siteType: z.string().min(1, 'Please select your site type'),
  priority: z.string().min(1, 'Please select your priority'),
  phone: z.string().optional(),
  details: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SpeedForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      website: '',
      currentSpeed: '',
      siteType: '',
      priority: '',
      phone: '',
      details: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Speed optimization form submitted:', data);
    toast({
      title: "Speed Analysis Request Submitted!",
      description: "We'll send your speed analysis and optimization plan within 24 hours.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
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
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL *</FormLabel>
              <FormControl>
                <Input placeholder="https://yourwebsite.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="currentSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Load Time *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="How long does your site take to load?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="under-2s">Under 2 seconds</SelectItem>
                  <SelectItem value="2-4s">2-4 seconds</SelectItem>
                  <SelectItem value="4-6s">4-6 seconds</SelectItem>
                  <SelectItem value="6-10s">6-10 seconds</SelectItem>
                  <SelectItem value="over-10s">Over 10 seconds</SelectItem>
                  <SelectItem value="not-sure">I'm not sure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="siteType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What type of website do you have?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="business">Business/Corporate</SelectItem>
                  <SelectItem value="ecommerce">E-commerce/Online Store</SelectItem>
                  <SelectItem value="blog">Blog/Content Site</SelectItem>
                  <SelectItem value="portfolio">Portfolio/Agency</SelectItem>
                  <SelectItem value="nonprofit">Non-profit</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
              <FormLabel>Optimization Priority *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your main goal?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="conversions">Increase sales/conversions</SelectItem>
                  <SelectItem value="seo">Improve SEO rankings</SelectItem>
                  <SelectItem value="user-experience">Better user experience</SelectItem>
                  <SelectItem value="google-scores">Pass Google Core Web Vitals</SelectItem>
                  <SelectItem value="mobile">Mobile performance</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any specific performance issues or requirements you'd like us to know about?"
                  className="resize-none"
                  rows={3}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" size="lg">
          Get My Speed Analysis
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          Free speed test • 50% improvement guarantee • 48-hour delivery
        </p>
      </form>
    </Form>
  );
};

export default SpeedForm;


