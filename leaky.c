#include<stdio.h>
int main()
{
    int incoming,outgoing rate,n,store=0;
    printf("enter the bucketsize,outgoing rate and no of inputs:");
    scanf("%d%d%d",&bucket_size,&outgoing_rate,&n);
    while(n!=0)
    {
        printf("enter incoming packet size:");
        scanf("%d",incoming);
        printf("incoming packet size %d ",incoming);
        if(incoming <=(bucket_size-store))
        {
            store+=incoming;
            printf("bucket buffer %d\n out of %d\n",store,bucket_size);
        }
        else
        {
            printf("dropped %d no of packets",incoming-(bucket_size-store));
            printf("bucket buffer size %d out of %d",store,bucket_size);
            store=bucket_size;
        }
        store=store-outgoing;
        printf("after outgoing %d\n packets left out of %d in buffer\n",store,bucket_size);
    }
}