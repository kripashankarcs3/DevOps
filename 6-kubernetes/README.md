# Kubernetes: Pod, Recreate aur RollingUpdate

## Files
- `pod.yaml` – single nginx pod
- `deployment-recreate.yaml` – 3 replicas, strategy `Recreate`
- `deployment-rolling.yaml` – 3 replicas, strategy `RollingUpdate` (maxSurge 1, maxUnavailable 0)

## Apply
```bash
kubectl apply -f pod.yaml -f deployment-recreate.yaml -f deployment-rolling.yaml
kubectl get pods
```

## Recreate test
```bash
kubectl set image deployment/nginx-recreate nginx=nginx:1.27
kubectl get pods -l app=nginx-recreate -w
```
Saare purane pods ek saath terminate hote hain, phir naye bante hain, to beech mein downtime hota hai.

## RollingUpdate test
```bash
kubectl set image deployment/nginx-rolling nginx=nginx:1.27
kubectl get pods -l app=nginx-rolling -w
kubectl rollout status deployment/nginx-rolling
kubectl rollout history deployment/nginx-rolling
kubectl rollout undo deployment/nginx-rolling   # rollback
```
Pods ek-ek karke replace hote hain aur hamesha 3 ready pods rehte hain, isliye zero downtime.

## Cleanup
```bash
kubectl delete -f .
```
