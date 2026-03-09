import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  Calendar,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

interface AnalyticsData {
  visitors: {
    current: number;
    previous: number;
    change: number;
  };
  pageViews: {
    current: number;
    previous: number;
    change: number;
  };
  avgSessionDuration: {
    current: number;
    previous: number;
    change: number;
  };
  bounceRate: {
    current: number;
    previous: number;
    change: number;
  };
  topPages: Array<{
    page: string;
    views: number;
    change: number;
  }>;
  devices: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  conversions: Array<{
    type: string;
    count: number;
    value: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual analytics API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with real analytics data
      setData({
        visitors: {
          current: 2847,
          previous: 2156,
          change: 32.1
        },
        pageViews: {
          current: 8542,
          previous: 6789,
          change: 25.8
        },
        avgSessionDuration: {
          current: 195,
          previous: 178,
          change: 9.6
        },
        bounceRate: {
          current: 42.3,
          previous: 48.7,
          change: -13.1
        },
        topPages: [
          { page: '/', views: 3247, change: 15.2 },
          { page: '/audit', views: 1856, change: 28.9 },
          { page: '/get-quote', views: 1234, change: 45.6 },
          { page: '/migration', views: 987, change: 12.3 },
          { page: '/speed', views: 765, change: 8.7 }
        ],
        devices: {
          desktop: 52.3,
          mobile: 38.2,
          tablet: 9.5
        },
        conversions: [
          { type: 'Contact Form', count: 45, value: 2250 },
          { type: 'Quote Request', count: 32, value: 16000 },
          { type: 'Audit Request', count: 78, value: 0 },
          { type: 'Newsletter Signup', count: 156, value: 0 }
        ]
      });
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? 
      <TrendingUp className="w-4 h-4 text-green-600" /> : 
      <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  if (isLoading || !data) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span className="text-muted-foreground">Loading...</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        
        <div className="flex items-center space-x-4">
          <div className="flex rounded-lg border">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="rounded-none first:rounded-l-lg last:rounded-r-lg"
              >
                {range === '7d' ? '7 days' : range === '30d' ? '30 days' : '90 days'}
              </Button>
            ))}
          </div>
          
          <Button variant="outline" size="sm" onClick={fetchAnalyticsData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Visitors</p>
                <p className="text-2xl font-bold">{formatNumber(data.visitors.current)}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex items-center mt-2">
              {getChangeIcon(data.visitors.change)}
              <span className={`text-sm ml-1 ${getChangeColor(data.visitors.change)}`}>
                {Math.abs(data.visitors.change)}% vs last period
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Page Views</p>
                <p className="text-2xl font-bold">{formatNumber(data.pageViews.current)}</p>
              </div>
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex items-center mt-2">
              {getChangeIcon(data.pageViews.change)}
              <span className={`text-sm ml-1 ${getChangeColor(data.pageViews.change)}`}>
                {Math.abs(data.pageViews.change)}% vs last period
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg. Session</p>
                <p className="text-2xl font-bold">{formatDuration(data.avgSessionDuration.current)}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <div className="flex items-center mt-2">
              {getChangeIcon(data.avgSessionDuration.change)}
              <span className={`text-sm ml-1 ${getChangeColor(data.avgSessionDuration.change)}`}>
                {Math.abs(data.avgSessionDuration.change)}% vs last period
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Bounce Rate</p>
                <p className="text-2xl font-bold">{data.bounceRate.current}%</p>
              </div>
              <MousePointer className="w-8 h-8 text-orange-600" />
            </div>
            <div className="flex items-center mt-2">
              {getChangeIcon(data.bounceRate.change)}
              <span className={`text-sm ml-1 ${getChangeColor(data.bounceRate.change)}`}>
                {Math.abs(data.bounceRate.change)}% vs last period
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Top Pages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium">{page.page === '/' ? 'Home' : page.page}</p>
                      <p className="text-sm text-muted-foreground">{formatNumber(page.views)} views</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getChangeIcon(page.change)}
                    <span className={`text-sm ${getChangeColor(page.change)}`}>
                      {Math.abs(page.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Device Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <span>Desktop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Progress value={data.devices.desktop} className="w-24 h-2" />
                  <span className="text-sm font-medium">{data.devices.desktop}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <span>Mobile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Progress value={data.devices.mobile} className="w-24 h-2" />
                  <span className="text-sm font-medium">{data.devices.mobile}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-purple-600" />
                  <span>Tablet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Progress value={data.devices.tablet} className="w-24 h-2" />
                  <span className="text-sm font-medium">{data.devices.tablet}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Conversions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.conversions.map((conversion) => (
              <div key={conversion.type} className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">{conversion.type}</h4>
                <p className="text-2xl font-bold mb-1">{conversion.count}</p>
                {conversion.value > 0 && (
                  <p className="text-sm text-muted-foreground">
                    ${formatNumber(conversion.value)} value
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;


