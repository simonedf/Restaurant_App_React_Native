import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HSmVqs_APgqGH0sQEKtUq_BulVOIZeDNl8auoHUXf2OJbi9bcSOBmlgunDjrBTWAoUwUeZQyrtKiezC1x8avfBMNCmBQSHGRu4VlFgcDCc3erKVhBZwbWvtfgWrnX3Yx'
    }
});

