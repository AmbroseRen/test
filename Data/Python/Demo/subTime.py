import time
start_time = time.perf_counter()
i = []
for x in range(10):
   if x%2 == 0:
      i.append(x)
print(i)
end_time = time.perf_counter()
print(end_time - start_time)
