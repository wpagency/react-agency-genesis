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
  currentHost: z.string().min(1, 'Current hosting provider is required'),
  newHost: z.string().min(1, 'New hosting provider is required'),
  timeline: z.string().min(1, 'Please select your preferred timeline'),
  phone: z.string().optional(),
  details: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const MigrationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      website: '',
      currentHost: '',
      newHost: '',
      timeline: '',
      phone: '',
      details: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Migration form submitted:', data);
    toast({
      title: "Migration Request Submitted!",
      description: "We'll contact you within 2 hours with a custom migration plan and quote.",
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
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="currentHost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Host *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., GoDaddy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="newHost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Host *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., SiteGround" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Timeline *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need this done?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                  <SelectItem value="1-3-days">Within 1-3 days</SelectItem>
                  <SelectItem value="1-week">Within 1 week</SelectItem>
                  <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                  <SelectItem value="flexible">I'm flexible</SelectItem>
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
                  placeholder="Any special requirements, plugins, or concerns about the migration?"
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
          Get My Migration Quote
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          Free consultation • Zero-downtime guarantee • 30-day post-migration support
        </p>
      </form>
    </Form>
  );
};

export default MigrationForm;


